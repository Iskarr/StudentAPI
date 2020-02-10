const express = require("express");

const InstructorCtrl = require("../controllers/Instructor-ctrl");

const router = express.Router();

router.post("/instructor", InstructorCtrl.createInstructor);
router.put("/instructor/:id", InstructorCtrl.updateInstructor);
router.delete("/instructor/:id", InstructorCtrl.deleteInstructor);
router.get("/instructor/:id", InstructorCtrl.getInstructorById);
router.get("/instructors", InstructorCtrl.getInstructors);

module.exports = router;
