const mongoose = require("mongoose");

const partTaskScheme = new mongoose.Schema({
  title: String,
  course: String,
  sphere: String,
  color: String,
  startDate: Date,
  endDate: Date,
  timeTaken: Number,
  value: { type: Number, int32: true },
  isFinished: { type: Boolean, default: false },
});

const PartTask = mongoose.model("PartTask", partTaskScheme);

module.exports = PartTask;
