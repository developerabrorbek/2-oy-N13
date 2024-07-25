const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { readFileCustom, writeFileCustom } = require("./utils/fs");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const allUsers = readFileCustom(path.join(__dirname, "data", "users.json"));

  res.render("index", { users: allUsers });
});

app.post("/create", (req, res) => {
  const newUser = req.body;

  const allUsers = readFileCustom(path.join(__dirname, "data", "users.json"));

  allUsers.push({
    ...newUser,
    id: allUsers.at(-1)?.id + 1 || 1,
  });

  writeFileCustom(path.join(__dirname, "data", "users.json"), allUsers);

  res.render("users", { users: allUsers });
});

app.listen(3000, () => {
  console.log(`Listening on ${3000} port`);
});
