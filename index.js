const express = require("express");
require("./config/db");
const mainroutes = require("./routes/index");
const cors = require("cors");
const port = process.env.PORT || 4001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api", mainroutes);
app.listen(port, () => console.log("server i started"));
