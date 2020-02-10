const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },
    enrolled: { type: String, required: false },
    course: { type: String, required: false },
    progress: { type: Number, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("students", Student);
