const mongoose = require("mongoose");

const sphereSchema = new mongoose.Schema({
  title: String,
  color: String,
  monthlyPoint: { type: Number, int32: true },
  monthIndex: [String],
  monthStats: [{ type: Number, int32: true }],
});

const Sphere = mongoose.model("Sphere", sphereSchema);

module.exports = Sphere;
