// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  find,
  insert
}

function find(id) {
  //SELECT * FROM resources;
  if (id) {
    return db("resources").where("resource_id", id);
  } else {
    return db("resources");
  }
  
}

function insert(project) {
  return db("resources").insert(project).then(res => {
    return find(res[0]);
  })
}