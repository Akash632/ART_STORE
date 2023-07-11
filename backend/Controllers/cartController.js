const cartModel = require("../Model/cartModel");

const getCartController = async(req,res)=>{
    try{
        const {uid,pid}=req.params;

        const result = await cartModel.find({user_id:uid});

        res.send(result);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = getCartController;