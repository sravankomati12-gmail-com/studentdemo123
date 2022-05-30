const mongoose = require("mongoose");

const Studentschema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  dob: Date,
  gender: String,
  hobbies: { type: Array, default: [] },
});

module.exports = mongoose.model("Studentinfo", Studentschema);
