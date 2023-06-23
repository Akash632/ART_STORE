const mongoose = require('mongoose');

const contactModel = new mongoose.Schema({
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
    comment:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true});

module.exports = mongoose.model('contacts',contactModel);