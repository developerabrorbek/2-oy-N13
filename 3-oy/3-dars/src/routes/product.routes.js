const { Router } = require("express");
const productController = require("../controllers/product.controller");

const productRouter = Router();

productRouter
  .get("/", productController.getAllProducts)
  .get("/stats", productController.getProductsStats)
  .post("/add", productController.createProduct);

module.exports = productRouter;
