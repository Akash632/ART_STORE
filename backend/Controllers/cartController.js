const cartModel = require("../Model/cartModel");

const addCartController = async(req,res)=>{
    try{
        const {id}=req.params;
        const{image_src,title,quantity,original_price,product_id}=req.body;

        const result = await cartModel({user_id:id,title,quantity,price:original_price,image_src,product_id}).save();

        res.status(200).send({
            success:true,
            message:"Item added to cart",
            result:result
        })
    }
    catch(err){
        res.status(500).send({
            success:false,
            message:"Internal error occurred"
        })
    }
}

const getCartController = async (req,res)=>{
    try{
        const {id}=req.params;

        const result= await cartModel.find({user_id:id})

        res.status(200).send({
            success:true,
            message:"Cart Items",
            result:result
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:"Internal Server Error",
        })
    }
}

const deleteCartController=async (req,res)=>{
    try{
        const {id}= req.params;


        const result = await cartModel.deleteOne({product_id:id})

        res.status(200).send({
            success:true,
            message:"Item deleted successfully"
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message:'Internal server error'
        })
    }
}

module.exports = { getCartController,addCartController,deleteCartController};