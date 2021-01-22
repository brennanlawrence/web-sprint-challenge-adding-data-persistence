exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          project_name: "Get Swole",
          project_description: "Get strong and huge",
          project_completed: false,
        },
        {
          project_name: "Get Shredded",
          project_description: "Get lean and strong",
          project_completed: false,
        },
        { project_name: "Get Yoked", project_completed: false },
      ]);
    });
};
