const studentschema = require("../Model/studentschema");

module.exports = {
  addStudent: async (req, res) => {
    try {
      const { name, email, age, dob, gender, hobbies } = req.body;

      await studentschema.create({
        name,
        email,
        age,
        gender,
        hobbies,
        dob,
      });
      res.json({ message: "student is added" }).status(200);
    } catch (error) {
      res.json({ message: error.message }).status(500);
    }
  },
  getAllStudent: async (req, res) => {
    try {
      const getstudents = await studentschema.find();
      res.json({ message: "List of Students", data: getstudents }).status(200);
    } catch (error) {
      res.json({ message: error.message }).status(500);
    }
  },
  getStudentById: async (req, res) => {
    try {
      const { id } = req.query;
      const getstudent = await studentschema.findById(id);
      if (getstudent != undefined) {
        res
          .json({ message: "get Students by id", data: getstudent })
          .status(200);
      } else {
        res.json({ message: "This Student id not exist" }).status(404);
      }
    } catch (error) {
      res.json({ message: error.message }).status(500);
    }
  },
  updateStudentById: async (req, res) => {
    try {
      const { id } = req.query;
      const { name, email, age, dob, gender, hobbies } = req.body;
      // console.log(req.body);
      const getstudent = await studentschema.findById(id);
      if (getstudent != undefined) {
        await studentschema.findByIdAndUpdate(id, {
          name,
          email,
          age,
          gender,
          hobbies,
          dob,
        });
        res.json({ message: "This student is updated" }).status(200);
      } else {
        res.json({ message: "This Student id not exist" }).status(404);
      }
    } catch (error) {
      res.json({ message: error.message }).status(500);
    }
  },
  deleteStudentById: async (req, res) => {
    try {
      const { id } = req.query;
      const getstudent = await studentschema.findById(id);
      if (getstudent != undefined) {
        await studentschema.findByIdAndDelete(id);
        res.json({ message: "This student deleted" }).status(200);
      } else {
        res.json({ message: "This Student id not exist" }).status(404);
      }
    } catch (error) {
      res.json({ message: error.message }).status(500);
    }
  },
};
