const mongoose=require('mongoose');

const orderModel = new mongoose.Schema({
    products:[
        {
            type:mongoose.ObjectId,
            ref:'products'
        },
    ],
    payement:{},
    buyer: {
        type:mongoose.ObjectId,
        ref:'users'
    },
    status:{
        type:String,
        default:'Not Process',
        enum:["Not Process", 'Processing',"Shipped","delivered","cancelled"],
     }
},{timestamps:true})

module.exports = mongoose.model('orders',orderModel);