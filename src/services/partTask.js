const PartTaskModel = require("../models/partTask");

class PartTaskService {
  async createPartTask(req, res) {
    const title = req.body.title;
    const course = req.body.course;
    const sphere = req.body.sphere;
    const color = req.body.color;
    const startDate = req.body.startDate;
    const value = req.body.value;
    const isStatic = req.body.isStatic;

    const partTask = await PartTaskModel.create({
      title: title,
      course: course,
      sphere: sphere,
      color: color,
      startDate: startDate,
      value: value,
      isStatic: isStatic,
    });

    res.json({ partTask: partTask });
  }

  async updatePartTask(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const course = req.body.course;
    const sphere = req.body.sphere;
    const color = req.body.color;
    const startDate = req.body.startDate;
    const value = req.body.value;
    const endDate = req.body.endDate;
    const timeTaken = req.body.timeTaken;
    const isFinished = req.body.isFinished;

    const partTask = await PartTaskModel.findByIdAndUpdate(id, {
      title: title,
      course: course,
      sphere: sphere,
      color: color,
      startDate: startDate,
      value: value,
      endDate: endDate,
      timeTaken: timeTaken,
      isFinished: isFinished,
    });

    res.json({ partTask: partTask });
  }

  async getPartTask(req, res) {
    const partTask = await PartTaskModel.find();
    res.json({ partTask: partTask });
  }
}

module.exports = new PartTaskService();
