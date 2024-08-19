const { config } = require("dotenv")

config()

const mongoConfig = {
  url: process.env.MONGO_URL + process.env.MONGO_DATABASE
}

module.exports = mongoConfig