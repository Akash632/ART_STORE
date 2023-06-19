const mongoose= require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:Number,
        default:0,
    },
},{timestamps:true}
)

module.exports = mongoose.model('users',userModel)