const CourseModel = require("../models/course");

class SphereService {
  async createCourse(req, res) {
    const title = req.body.title;
    const sphere = req.body.sphere;
    const color = req.body.color;
    const startDate = req.body.startDate;
    const value = req.body.value;
    const isStatic = req.body.isStatic;

    const course = await CourseModel.create({
      title: title,
      sphere: sphere,
      color: color,
      startDate: startDate,
      value: value,
      isStatic: isStatic,
    });

    res.json({ course: course });
  }

  async updateCourse(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const sphere = req.body.sphere;
    const color = req.body.color;
    const startDate = req.body.startDate;
    const value = req.body.value;
    const endDate = req.body.endDate;
    const timeTaken = req.body.timeTaken;
    const isFinished = req.body.isFinished;
    const isStatic = req.body.isStatic;

    const course = await CourseModel.findByIdAndUpdate(id, {
      title: title,
      sphere: sphere,
      color: color,
      startDate: startDate,
      value: value,
      endDate: endDate,
      timeTaken: timeTaken,
      isFinished: isFinished,
      isStatic: isStatic,
    });

    res.json({ course: course });
  }

  async getCourses(req, res) {
    const courses = await CourseModel.find();
    res.json({ courses: courses });
  }
}

module.exports = new CourseService();
