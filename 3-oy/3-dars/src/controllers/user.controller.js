const { isValidObjectId } = require("mongoose");
const User = require("../models/user.model");
const ApiFeature = require("../utils/api-features.utils");

class UserController {
  #_userModel;

  constructor() {
    this.#_userModel = User;
  }

  getAllUsers = async (req, res) => {
    try {
      const query = { ...req.query };

      // GET ALL FILTERED USERS COUNT
      const allResults = await new ApiFeature(this.#_userModel.find(), query)
        .filter()
        .sort("first_name")
        .limitFields()
        .getQuery()
        .countDocuments();

      // EXECUTE QUERY
      const allUsers = await new ApiFeature(this.#_userModel.find(), query)
        .filter()
        .sort("first_name")
        .limitFields()
        .paginate()
        .getQuery().populate("products", "_id title price");

      res.send({
        message: "success",
        page: req.query?.page || 1,
        limit: req.query?.limit || 10,
        results: allResults,
        data: allUsers,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };

  createUser = async (req, res) => {
    try {
      const { firstName, lastName, phone, interests, status, age } = req.body;

      const newUser = this.#_userModel.create({
        first_name: firstName,
        last_name: lastName,
        phone,
        interests,
        status,
        age,
      });

      res.status(201).send({
        message: "success",
        data: newUser,
      });
    } catch (err) {
      res.status(500).send({
        message: error.message,
      });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { firstName, lastName, phone, interests, ...rest } = req.body;

      const userId = req.params?.userId;

      // Checking user Id to Object ID
      this.#_checkObjectId(userId);

      const foundedUser = await this.#_userModel.findById(userId);

      if (!foundedUser) {
        return res.status(404).send({
          message: "User topilmadi",
        });
      }

      const newUser = await this.#_userModel.findByIdAndUpdate(
        userId,
        {
          $set: {
            first_name: firstName,
            last_name: lastName,
            phone,
            interests,
            ...rest,
          },
        },
        {
          strict: false,
        }
      );

      res.status(200).send({
        message: "success",
        data: newUser,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { firstName, lastName, phone, interests, ...rest } = req.body;

      const userId = req.params?.userId;

      // Checking user Id to Object ID
      this.#_checkObjectId(userId);

      await this.#_userModel.findByIdAndDelete(userId);

      res.status(200).send({
        message: "success",
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  };

  #_checkObjectId = (id) => {
    if (!isValidObjectId(id)) {
      throw new Error(`Id: ${id} is not a valid object id`);
    }

    return null;
  };
}

module.exports = new UserController();
