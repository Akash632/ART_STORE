const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    require: true,
  },
  original_price: {
    type: String,
    trim: true,
    require: true,
  },
  discount_price: {
    type: String,
    trim: true,
  },
  discount: {
    type: String,
    trim: true,
  },
  image_src: {
    type: String,
    trim: true,
    require: true,
  },
  product_info: {
    type: Array,
    trim: true,
    require: true,
  },
  related_images: {
    type: Array,
    trim: true,
  },
  quantity:{
    type:Number,
    require: true,
    default:1
  },
  category:{
    type:mongoose.ObjectId,
    ref:'categories',
    require:true,
  },
  product_status:{
    type:String,
    default:true,
  }
});

// module.exports = productSchema;
// const ProductModel = mongoose.model('products',productSchema);

module.exports = mongoose.model("products", productModel);
