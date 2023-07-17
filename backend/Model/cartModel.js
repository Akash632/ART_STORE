const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    user_id:{
        type:mongoose.ObjectId,
        ref:'users',
        require:true
    },
    product_id:{
        type:mongoose.ObjectId,
        ref:'products',
        require:true
    },
    image_src:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        default:1
    },
    price:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('cart', cartModel);