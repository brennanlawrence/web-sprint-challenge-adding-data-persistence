// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";
const knex = require("knex");
const configs = require("../knexfile");

const db = knex(configs[environment]);

module.exports = db;