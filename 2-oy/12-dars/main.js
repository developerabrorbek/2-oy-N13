const express = require("express");
const fetchData = require("./postgres/postgres");

const app = express();

app.get("/", async (req, res) => {
  const { limit, page } = req.query;
  // const offset = (page - 1) * limit;
  const data = await fetchData(
    `SELECT * FROM cars_demo LIMIT $1 OFFSET ${page};`,
    limit,
    // offset
  );

  res.send({
    message: "Hello from server!",
    data,
  });
});

app.listen(5000, "localhost", () => {
  console.log("listening on port 5000");
});
