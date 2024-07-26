const { Router } = require("express");
const {
  getAllStudents,
  getSingleStudentById,
} = require("../controllers/student.controller");

const userRoutes = Router();

userRoutes
  .get("/", getAllStudents)
  .get("/:studentId", getSingleStudentById);

module.exports = userRoutes;
