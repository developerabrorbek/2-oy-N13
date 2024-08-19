const mongoose = require("mongoose");
const mongoConfig = require("../config/mongo.config");

async function mongoDB() {
  await mongoose.connect(mongoConfig.url);
}

module.exports = mongoDB