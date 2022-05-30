const express = require("express");
const studentControls = require("../controllers/studentController");
const studentRouter = express.Router();
studentRouter.post("/add", studentControls.addStudent);
studentRouter.get("/getall", studentControls.getAllStudent);
studentRouter.get("/getbyid", studentControls.getStudentById);
studentRouter.post("/update", studentControls.updateStudentById);
studentRouter.delete("/delete", studentControls.deleteStudentById);
module.exports = studentRouter;
