const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:String,
    original_price:String,
    discount_price:String,
    discount:String,
    image_src:String
});

module.exports = productSchema;
// const ProductModel = mongoose.model('products',productSchema);