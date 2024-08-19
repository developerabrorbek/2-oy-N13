const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const appConfig = require("./config/app.config");
const mongoDB = require("./mongo/mongo");
const routes = require("./routes");

const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to mongoDB database
mongoDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/v1", routes)

// listening server  
app.listen(appConfig.port, appConfig.host, () => {
  console.log(`listening on ${appConfig.port}`);
});
