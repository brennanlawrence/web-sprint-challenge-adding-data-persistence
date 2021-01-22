// build your `/api/tasks` router here
const express = require("express");

const Task = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Task.find()
    .then((tasks) => res.status(200).json(tasks))
    .catch((err) => next);
});

router.post("/", (req, res, next) => {
  Task.insert(req.body)
  .then((task) => res.status(200).json(task))
  .catch((err) => next);
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;