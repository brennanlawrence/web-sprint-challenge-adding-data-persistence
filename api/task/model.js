const db = require("../../data/dbConfig");

module.exports = {
  find,
  insert
}

function find(id) {
  //SELECT * FROM tasks;
  if (id) {
    return db("tasks").where("task_id", id);
  } else {
    return db("tasks");
  }
  
}

function insert(task) {
  return db("tasks").insert(task).then(res => {
    return find(res[0]);
  })
}