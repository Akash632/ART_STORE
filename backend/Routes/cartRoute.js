const express = require('express');
const {addCartController, getCartController, deleteCartController} = require('../Controllers/cartController');
const requireSignIn = require('../Middlewares/authMiddleware');
const cartRouter = express.Router();

cartRouter.get('/getCart/:id',getCartController);

cartRouter.post(`/addCart/:id`,addCartController);

cartRouter.delete('/deleteCart/:id',deleteCartController);


module.exports = cartRouter;