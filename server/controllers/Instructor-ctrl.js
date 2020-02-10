const Instructor = require("../models/teacher-model");

createInstructor = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide an Instructor"
    });
  }

  const instructor = new Instructor(body);

  if (!instructor) {
    return res.status(400).json({ success: false, error: err });
  }

  instructor
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: instructor._id,
        message: "Instructor created!"
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "Instructor not created!"
      });
    });
};

updateInstructor = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update"
    });
  }

  Instructor.findOne({ _id: req.params.id }, (err, instructor) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Instructor not found!"
      });
    }
    instructor.name = body.name;
    instructor.time = body.time;
    instructor.rating = body.rating;
    instructor.course = body.course;
    instructor.role = body.role;

    instructor
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: instructor._id,
          message: "Instructor updated!"
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: "Instructor not updated!"
        });
      });
  });
};

deleteInstructor = async (req, res) => {
  await Instructor.findOneAndDelete(
    { _id: req.params.id },
    (err, instructor) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!instructor) {
        return res
          .status(404)
          .json({ success: false, error: `Instructor not found` });
      }

      return res.status(200).json({ success: true, data: instructor });
    }
  ).catch(err => console.log(err));
};

getInstructorById = async (req, res) => {
  await Instructor.findOne({ _id: req.params.id }, (err, instructor) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!instructor) {
      return res
        .status(404)
        .json({ success: false, error: `Instructor not found` });
    }
    return res.status(200).json({ success: true, data: instructor });
  }).catch(err => console.log(err));
};

getInstructors = async (req, res) => {
  await Instructor.find({}, (err, instructors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!instructors.length) {
      return res
        .status(404)
        .json({ success: false, error: `Instructor not found` });
    }
    return res.status(200).json({ success: true, data: instructors });
  }).catch(err => console.log(err));
};

module.exports = {
  createInstructor,
  updateInstructor,
  deleteInstructor,
  getInstructors,
  getInstructorById
};
