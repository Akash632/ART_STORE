const mongoose = require('mongoose');

const categoryModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    slug:{
        type:String,
        lowercase:true
    }
})

module.exports = mongoose.model('category',categoryModel);







