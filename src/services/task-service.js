const TaskModel = require("../models/task");

class TaskService {
  async createTask(req, res) {
    const title = req.body.title;
    const partTask = req.body.partTask;
    const course = req.body.course;
    const sphere = req.body.sphere;
    const color = req.body.color;
    const value = req.body.value;

    const task = await TaskModel.create({
      title: title,
      partTask: partTask,
      course: course,
      sphere: sphere,
      color: color,
      value: value,
    });

    res.json({ task: task });
  }

  async updateTask(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const partTask = req.body.partTask;
    const course = req.body.course;
    const sphere = req.body.sphere;
    const color = req.body.color;
    const startDate = req.body.startDate;
    const value = req.body.value;
    const endDate = req.body.endDate;
    const timeTaken = req.body.timeTaken;
    const isFinished = req.body.isFinished;

    const task = await TaskModel.findByIdAndUpdate(id, {
      title: title,
      partTask: partTask,
      course: course,
      sphere: sphere,
      color: color,
      startDate: startDate,
      value: value,
      endDate: endDate,
      timeTaken: timeTaken,
      isFinished: isFinished,
    });

    res.json({ task: task });
  }

  async getTask(req, res) {
    const task = await TaskModel.find();
  }
}

module.exports = new TaskService();
