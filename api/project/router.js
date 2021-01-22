// build your `/api/projects` router here
const express = require("express");

const Project = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => next);
});

router.post("/", (req, res, next) => {
  Project.insert(req.body)
  .then((project) => res.status(200).json(project))
  .catch((err) => next);
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;
