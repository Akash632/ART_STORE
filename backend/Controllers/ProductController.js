const productModel = require('../Model/productsModel.js');
const slugify = require('slugify');

const addProductController = async (req,res)=>{
    try{
        const {title,original_price,discount_price,discount,image_src,product_info,category,quantity,product_status} = req.body;

        if(!title||!original_price||!image_src||!product_info||!category||!quantity){
            return res.status(403).send({
                success:false,
                message:"Please enter valid details"
            })
        }

        const existingProduct = await productModel.find({slug:slugify(title)});

        if(existingProduct.length>0){
            return res.status(403).send({
                success:false,
                message:"Product name already exists"
            })
        }

        const newProduct = await productModel({title,slug:slugify(title),original_price,discount_price,discount,image_src,product_info,category,quantity,product_status}).save();

        res.status(200).send({
            success:true,
            message:'Product added successfully',
            data: newProduct
        })
    }catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"It's not you, it's us"
        })
    }
}
const getProductController = async (req,res)=>{
    try{
    const products = await productModel.find({});
    res.status(200).send({
        success:true,
        products:products
    })
    }catch(err){
        res.status(404).send({
            success:false,
            message:"Nothing to show"
        })
    }
}


const productDetailsController = async (req,res)=>{
    try{
        const {id} = req.params;

        console.log(id);
        
        const productDetails = await productModel.findOne({_id:id});
        res.status(200).send({
            success:true,
            details:productDetails
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            message:"Its not you. It's you",
        })
    }
}

const getProductsByCategoryController = async (req,res)=>{
    try{
        const {checked} = req.body; 
        console.log(checked);
        let args={};
        // if(checked.length>0){
        //    args.category = checked 
        // }
        console.log(args);
        const products = await productModel.find({category:{"$in":checked}})
        res.send(products);
    }catch(err){
        res.status(500).send({
            success:false,
            message:"It's not you. It's us"
        })
    }
}

module.exports = {getProductController,productDetailsController,addProductController,getProductsByCategoryController};