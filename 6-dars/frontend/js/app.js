import { createTaskFetch, getAllTasks } from "./functions.js";

const showAllTasks = async function () {
  const allTasks = await getAllTasks();

  const elContainer = document.getElementById("tasksContainer");
  elContainer.innerHTML = "";
  allTasks.data.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `
    <span>${task.id}. <span class="title">${task.title}</span>  <span class="title">${task.is_done}</span></span>
    <button class="modify-button" onclick="modifyTask(${task.id})">Update</button>
    <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
    `;
    elContainer.appendChild(taskDiv);
  });
};

const createTask = async function () {
  const elInput = document.getElementById("taskInput");
  const myFormData = new FormData();

  elInput.files.forEach((file) => {
    myFormData.append("image", file);
  });

  myFormData.append("title", "Yangi task")
  // await createTaskFetch(elInput.value);
  // await showAllTasks();
};

window.showAllTasks = showAllTasks;
window.createTask = createTask;
