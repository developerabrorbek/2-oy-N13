const { Router } = require("express");
const userController = require("../controllers/user.controller");

const userRouter = Router();


userRouter
  .get("/", userController.getAllUsers)
  .post("/add", userController.createUser)
  .put("/update/:userId", userController.updateUser)
  .delete("/delete/:userId", userController.deleteUser)

module.exports = userRouter;
