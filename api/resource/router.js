const express = require("express");

const Resource = require("./model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Resource.find()
    .then((resources) => res.status(200).json(resources))
    .catch((err) => next);
});

router.post("/", (req, res, next) => {
  Resource.insert(req.body)
  .then((resource) => res.status(200).json(resource))
  .catch((err) => next);
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = router;