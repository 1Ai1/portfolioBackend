const SphereModel = require("../models/sphere");

class SphereService {
  async createSphere(req, res) {
    const title = req.body.title;
    const color = req.body.color;
    const monthlyPoint = req.body.monthlyPoint;
    const monthIndex = req.body.monthIndex;
    const monthStats = req.body.monthStats;

    const sphere = await SphereModel.create({
      title: title,
      color: color,
      monthlyPoint: monthlyPoint,
      monthIndex: monthIndex,
      monthStats: monthStats,
    });

    res.json({ sphere: sphere });
  }

  async updateSphere(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const color = req.body.color;
    const monthlyPoint = req.body.monthlyPoint;
    const monthIndex = req.body.monthIndex;
    const monthStats = req.body.monthStats;

    const sphere = await SphereModel.findByIdAndUpdate(id, {
      title: title,
      color: color,
      monthlyPoint: monthlyPoint,
      monthIndex: monthIndex,
      monthStats: monthStats,
    });
    res.json({ sphere: sphere });
  }

  async getSpheres(req, res) {
    const spheres = await SphereModel.find();
    res.json({ spheres: spheres });
  }
}

module.exports = new SphereService();
