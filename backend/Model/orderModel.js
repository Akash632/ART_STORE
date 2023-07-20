const mongoose=require('mongoose');

const orderModel = new mongoose.Schema({
    products:[
        {
            product_id:{
                type:mongoose.ObjectId,
                ref:'products'
            },
            quantity:{
                type:Number,
                require:true
            },
            title:{
                type:String,
                require:true
            },
            image_src:{
                type:String,
                require:true
            },
            original_price:{
                type:Number,
                require:true
            }
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