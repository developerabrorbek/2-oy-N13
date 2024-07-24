const data = [
  {
    id: 1,
    title: "Yugurish 20 min",
    is_done: false,
  },
  {
    id: 2,
    title: "Kitob o'qish 30 bet",
    is_done: true,
  },
];

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.send({
    message: "Hello from server!",
    data,
  });
});

app.get("/tasks/:taskId", (req, res) => {
  const taskId = req.params.taskId;

  const foundedTask = data.find((t) => t.id == taskId);

  res.send({
    message: "Hello from server!",
    data: foundedTask,
  });
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;

  console.log(newTask)

  data.push({
    ...newTask,
    id: data.at(-1)?.id + 1,
  });

  res.send(data);
});

app.put("/tasks/:taskId", (req, res) => {
  const updateData = req.body;
  const taskId = req.params.taskId;
  const foundedTaskIndex = data.findIndex((t) => t.id == req.params.taskId);

  data.splice(foundedTaskIndex, 1, { id: taskId, ...updateData });

  res.send(data);
});

app.patch("/tasks/:taskId", (req, res) => {
  const updateData = req.body;
  const taskId = req.params.taskId;
  const foundedTaskIndex = data.findIndex((t) => t.id == req.params.taskId);

  if (updateData?.title) {
    data[foundedTaskIndex].title = updateData.title;
  }

  if (updateData?.is_done) {
    data[foundedTaskIndex].is_done = updateData.is_done;
  }

  res.send(data);
});

app.delete("/tasks/:taskId", (req, res) => {
  const foundedTaskIndex = data.findIndex((t) => t.id == req.params.taskId);

  console.log(foundedTaskIndex);

  if (foundedTaskIndex !== -1) {
    const newData = data.splice(foundedTaskIndex, 1);
    res.send(newData);
    return;
  }

  res.send(data);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
