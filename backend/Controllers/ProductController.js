const productModel = require('../Model/productsModel.js');

// console.log(productModel);
const getProductController = async (req,res)=>{
    // const {title,original_price,discount_price,dicount,image_src,product_info,related_images} = req.body;

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

module.exports = {getProductController,productDetailsController};