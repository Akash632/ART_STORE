const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    user_id:{
        type:mongoose.ObjectId,
        ref:'users',
        required:true
    },
    product_id:{
        type:mongoose.ObjectId,
        ref:'products',
        required:true
    }
})

module.exports = mongoose.model('cart', cartModel);