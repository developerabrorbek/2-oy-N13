const { Router } = require("express");
const userRouter = require("./user.routes");
const productRouter = require("./product.routes");

const routes = Router();

routes.use("/users", userRouter).use("/products", productRouter);

module.exports = routes;
