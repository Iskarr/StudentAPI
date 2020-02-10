const express = require("express");

const StudentCtrl = require("../controllers/student-ctrl");

const router = express.Router();

router.post("/student", StudentCtrl.createStudent);
router.put("/student/:id", StudentCtrl.updateStudent);
router.delete("/student/:id", StudentCtrl.deleteStudent);
router.get("/student/:id", StudentCtrl.getStudentById);
router.get("/students", StudentCtrl.getStudents);

module.exports = router;
