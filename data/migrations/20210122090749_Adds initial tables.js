exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable();
      table.string("project_description", 500);
      table.boolean("project_completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 128).unique().notNullable();
      table.string("resource_description", 500);
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_name", 128).notNullable();
      table.string("task_description", 500).notNullable();
      table.string("task_notes", 500);
      table.boolean("task_completed").notNullable().defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT");
    })
    .createTable("project_resources", (table) => {
      table.increments("appointment_id");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
