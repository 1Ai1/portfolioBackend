const mongoose = require("mongoose");

const courseScheme = new mongoose.Schema({
  title: String,
  sphere: String,
  color: String,
  startDate: Date,
  endDate: Date,
  timeTaken: { type: Number, int32: true },
  value: { type: Number, int32: true },
  isStatic: Boolean,
  isFinished: { type: Boolean, default: false },
});

const Course = mongoose.model("Course", courseScheme);

module.exports = Course;
