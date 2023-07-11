const express = require('express');
const getCartController = require('../Controllers/cartController');

const cartRouter = express.Router();

cartRouter.get('/getCart',getCartController);

module.exports = cartRouter;