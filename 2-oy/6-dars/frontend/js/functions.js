const SERVER_BASE_URL = "http://localhost:3000";

export const getAllTasks = async () => {
  const res = await fetch(SERVER_BASE_URL + "/tasks");
  return await res.json();
};

export const createTaskFetch = async (title) => {
  await fetch(SERVER_BASE_URL + "/tasks", {
    method: "POST",
    body: JSON.stringify({
      title,
      is_done: true,
    }),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
};
