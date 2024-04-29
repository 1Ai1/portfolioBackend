if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// dependencies
const express = require("express");
const connectDb = require("./config/connectDb");
const Sphere = require("./models/sphere");
const Router = require("express").Router;
const SphereService = require("./services/sphere-service");

const app = express();

app.use(express.json());

//database connection
connectDb();

//routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/spheres", SphereService.getSpheres);
app.post("/spheres", SphereService.createSphere);
app.put("/spheres", SphereService.updateSphere);

app.listen(3000);
