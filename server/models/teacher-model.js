const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Instructor = new Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },
    course: { type: String, required: false },
    role: {
      type: [String],
      required: true,
      enum: ["Instructor", "Substitute", "Student"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("instructors", Instructor);
