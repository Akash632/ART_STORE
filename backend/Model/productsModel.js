const mongoose = require("mongoose");

// const productS = mongoose.Schema({
//     title:String,
//     original_price:String,
//     discount_price:String,
//     discount:String,
//     image_src:String
// });

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
    require: true,
  },
  discount: {
    type: String,
    trim: true,
    require: true,
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
    require: true,
  },
});

// module.exports = productSchema;
// const ProductModel = mongoose.model('products',productSchema);

module.exports = mongoose.model("products", productModel);
