const productModel = require("../Model/productsModel.js");
const slugify = require("slugify");
const categoryModel = require("../Model/categoryModel.js");
const cloudinary = require("../Config/cloudinary.js");
const braintree = require("braintree");
const orderModel = require("../Model/orderModel.js");

var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

const addProductController = async (req, res) => {
  try {
    const {
      title,
      original_price,
      discount_price,
      discount,
      image_src,
      product_info,
      category,
      quantity,
      product_status,
    } = req.body;

    if (!title || !original_price || !image_src || !product_info || !category) {
      return res.status(403).send({
        success: false,
        message: "Please enter valid details",
      });
    }

    const existingProduct = await productModel.find({ slug: slugify(title) });

    if (existingProduct.length > 0) {
      return res.status(403).send({
        success: false,
        message: "Product name already exists",
      });
    }

    if (image_src) {
      const upload_res = await cloudinary.uploader.upload(image_src, {
        upload_preset: "a8wwoczn",
      });

      if (upload_res) {
        const newProduct = await productModel({
          title,
          slug: slugify(title),
          original_price,
          discount_price,
          discount,
          image_src: upload_res.secure_url,
          product_info,
          category,
          quantity,
          product_status,
        }).save();
      }
    }

    res.status(200).send({
      success: true,
      message: "Product added successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "It's not you, it's us",
    });
  }
};
const getProductController = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send({
      success: true,
      products: products,
    });
  } catch (err) {
    res.status(404).send({
      success: false,
      message: "Nothing to show",
    });
  }
};

const productDetailsController = async (req, res) => {
  try {
    const { id } = req.params;

    const productDetails = await productModel.findOne({ _id: id });
    res.status(200).send({
      success: true,
      details: productDetails,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Its not you. It's you",
    });
  }
};

const getProductsByFilterController = async (req, res) => {
  try {
    const { checked } = req.body;
    let args = {};
    // if(checked.length>0){
    //    args.category = checked
    // }
    const products = await productModel.find({ category: { $in: checked } });
    res.send(products);
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "It's not you. It's us",
    });
  }
};

const getProductsByCategoryController = async (req, res) => {
  try {
    const { category } = req.params;

    const categories = await categoryModel.find({ slug: category });
    const products = await productModel.find({ category: categories[0]._id });

    res.status(200).send({
      success: true,
      message: `Products in ${category}`,
      products: products,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "It's not you. It's us!!!",
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body.image_src) {
     const imgSrc = await productModel.find({ image_src: req.body.image_src });

      if (imgSrc.length===0) {
        const upload_res = await cloudinary.uploader.upload(req.body.image_src, {
          upload_preset: "a8wwoczn",
        });

        if (upload_res) {
          await productModel.updateOne({ _id: id },
            {
              $set: {...req.body,image_src:upload_res.secure_url},
            }
          );

          return res.status(200).send({
            success:true,
            message:"Updated successfully"
          })
        }
      }else{
        await productModel.updateOne({_id:id},{$set:req.body})

        return res.status(200).send({
            success:true,
            message:"Updated successfully"
        })
    }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "It's not you. It's us!!!",
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    await productModel.deleteOne({ _id: id });

    res.status(200).send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};


const braintreeTokenController= async (req,res)=>{
  try{
    gateway.clientToken.generate({},function(err,response){
      if(err){
        res.status(500).send({
          err
        })
      }else{
        res.send(response);
      }
    })
  }catch(err){
    console.log(err);
  }
}

const brainTreeCartPayementController= async(req,res)=>{
  try{
    const {nonce,cart}= req.body;

    let total = 0

    total = cart.reduce((acc,value)=>value.original_price*value.quantity+acc,0)

    let newTransaction = gateway.transaction.sale({
      amount:total,
      paymentMethodNonce:nonce,
      options:{
        submitForSettlement:true
      }
    },
    function(err,result){
      if(result){
        const order = new orderModel({
          products:cart,
          payement:result,
          buyer:req.user._id,
        }).save()
        res.json({ok:true})
      }else{
        res.status(500).send({
          err
        })
      }
    }
    ) 
  }catch(err){
    console.log(err)
  }
}

const brainTreeShopPayementController= async(req,res)=>{
  try{
    const {nonce,data}= req.body;

    let total = 0

    total = data.original_price*data.quantity

    let newTransaction = gateway.transaction.sale({
      amount:total,
      paymentMethodNonce:nonce,
      options:{
        submitForSettlement:true
      }
    },
    function(err,result){
      if(result){
        const order = new orderModel({
          products:data,
          payement:result,
          buyer:req.user._id,
        }).save()
        res.json({ok:true})
      }else{
        res.status(500).send({
          err
        })
      }
    }
    ) 
  }catch(err){
    console.log(err)
  }
}
module.exports = {
  getProductController,
  productDetailsController,
  addProductController,
  getProductsByFilterController,
  getProductsByCategoryController,
  deleteProductController,
  updateProductController,
  braintreeTokenController,
  brainTreeCartPayementController,
  brainTreeShopPayementController
};
