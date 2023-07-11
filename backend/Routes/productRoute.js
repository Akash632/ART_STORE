const express =require('express');
const { addProductController, getProductController, productDetailsController, getProductsByCategoryController } = require('../Controllers/ProductController');
const {requireSignIn,isAdmin} = require('../Middlewares/authMiddleware')
const productRouter = express.Router();

productRouter.post('/addProduct',requireSignIn,isAdmin, addProductController)

productRouter.get('/getproducts',getProductController);

productRouter.get('/getProducts/:id',productDetailsController);

productRouter.post('/getProductsByCategory',getProductsByCategoryController)

module.exports = productRouter