const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const studentRouter = require("./routes/student-router");
const instructorRouter = require("./routes/instructor-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/home", (req, res) => {
  res.send("Hello World! Attempt 20mill gp");
});

app.use("/api", studentRouter, instructorRouter);

app.listen(apiPort, () =>
  console.log("\x1b[33m%s\x1b[0m", `Server running on port ${apiPort}`)
);
