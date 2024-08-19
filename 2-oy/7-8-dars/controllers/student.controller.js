const { readFileCustom } = require("../utils/fs");
const path = require("path");

const getAllStudents = (req, res) => {
  const allStudents = readFileCustom(
    path.join(__dirname, "..", "data", "student.json")
  );

  res.send({
    message: "ok",
    data: allStudents,
  });
};

const getSingleStudentById = (req, res) => {
  const allSudents = readFileCustom(
    path.join(__dirname, "..", "data", "student.json")
  );

  const foundedStudent = allSudents.find((s) => s.id == req.params.studentId);

  res.send(foundedStudent);
};

module.exports = { getAllStudents, getSingleStudentById };
