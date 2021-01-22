// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  find,
  insert
}

function find(id) {
  //SELECT * FROM projects;
  if (id) {
    return db("projects").where("project_id", id);
  } else {
    return db("projects");
  }
  
}

function insert(project) {
  return db("projects").insert(project).then(res => {
    return find(res[0]);
  })
}