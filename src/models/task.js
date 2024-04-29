const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  title: String,
  partTask: String,
  course: String,
  sphere: String,
  startDate: [Date],
  endDate: [Date],
  timeTaken: [{ type: Number, int32: true }],
  value: { type: Number, int32: true },
  isFinished: { type: Boolean, default: false },
});

const Task = mongoose.model("PartTask", TaskScheme);

module.exports = Task;
