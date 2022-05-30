const express = require("express");
const studentRouter = require("./studentRoute");
const index = express();
index.use("/student", studentRouter);
module.exports = index;
