const mongoose = require('mongoose');

const comissionsModel = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    phone:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    requirements:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true});

module.exports = mongoose.model('comissions',comissionsModel);