const productModel = require("../Model/productsModel.js");
const slugify = require("slugify");
const categoryModel = require("../Model/categoryModel.js");
const cloudinary = require("../Config/cloudinary.js");

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
    console.log(err);
    res.status(500).send({
      success: false,
      message: "It's not you, it's us",
    });
  }
};
const getProductController = async (req, res) => {
  try {
    const products = await productModel.find({});
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
    console.log(err);
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
    console.log(args);
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
     console.log(imgSrc);

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
module.exports = {
  getProductController,
  productDetailsController,
  addProductController,
  getProductsByFilterController,
  getProductsByCategoryController,
  deleteProductController,
  updateProductController,
};
