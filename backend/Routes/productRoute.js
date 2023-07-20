const express = require("express");
const {
  addProductController,
  getProductController,
  productDetailsController,
  getProductsByFilterController,
  getProductsByCategoryController,
  deleteProductController,
  updateProductController,
  braintreeTokenController,
  brainTreeCartPayementController,
  brainTreeShopPayementController,
} = require("../Controllers/ProductController");
const { requireSignIn, isAdmin } = require("../Middlewares/authMiddleware");
const productRouter = express.Router();

productRouter.post("/addProduct", requireSignIn, isAdmin, addProductController);

productRouter.get("/getproducts", getProductController);

productRouter.get("/getProducts/:id", productDetailsController);

productRouter.post("/getProductsByFilter", getProductsByFilterController);

productRouter.get(
  "/getProductsByCategory/:category",
  getProductsByCategoryController
);

productRouter.delete(
  "/deleteProduct/:id",
  requireSignIn,
  isAdmin,
  deleteProductController
);

productRouter.put(
  "/updateProduct/:id",
  requireSignIn,
  isAdmin,
  updateProductController
);

productRouter.get("/braintree/token", braintreeTokenController);

productRouter.post(
  "/braintree/cartPayement",
  requireSignIn,
  brainTreeCartPayementController
);

productRouter.post(
  "/braintree/shopPayement",
  requireSignIn,
  brainTreeShopPayementController
);

module.exports = productRouter;
