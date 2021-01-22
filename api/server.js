// build your server here
const express = require("express");
const helmet = require("helmet");
const projectRoute = require("./project/router");
const resourceRoute = require("./resource/router");
const taskRoute = require("./task/router");


const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRoute);
server.use("/api/resources", resourceRoute);
server.use("/api/tasks", taskRoute);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server is live"})
})

module.exports = server;