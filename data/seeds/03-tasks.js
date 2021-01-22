exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          task_name: "Do 10,000 swings challenge",
          task_description: "500 kettlebell swings a day for 20 days",
          task_notes: "53 lb Bell",
          task_completed: false,
          project_id: 1,
        },
        {
          task_name: "Eat Beakfast",
          task_description:
            "One lb of chicken, 10 ounces rice, stirfry vegitables, etc",
          task_completed: false,
          project_id: 1,
        },
        {
          task_name: "Do mobility",
          task_description:
            "Mobilize glutes, back, and shoulders, from the swings",
          task_completed: false,
          project_id: 1,
        },
        {
          task_name: "Deadlift, Military press, and battle ropes",
          task_description:
            "2 lifts each, super heavy, 10-20 minutes BR with 160 BPM. No music.",
          task_notes: "Max weights",
          task_completed: false,
          project_id: 2,
        },
        {
          task_name: "Eat Lunch",
          task_description:
            "One lb of Lamb, 10 ounces rice, stirfry vegitables, two servings yogurt, etc",
          task_completed: false,
          project_id: 2,
        },
        {
          task_name: "Do mobility",
          task_description:
            "Mobilize glutes, back, quads, and pec min, from the ropes",
          task_completed: false,
          project_id: 2,
        },
        {
          task_name: "Do 10 mile carries",
          task_description: "Kettle bell carries for 10 miles on foot",
          task_notes: "2 Pood Bell",
          task_completed: false,
          project_id: 3,
        },
        {
          task_name: "Eat Dinner",
          task_description:
            "One lb of Salmon, 10 ounces rice, stirfry vegitables, olives, etc",
          task_completed: false,
          project_id: 3,
        },
        {
          task_name: "Do mobility",
          task_description:
            "Mobilize calves, aductors, abductors, and psoaz, from the carries",
          task_completed: false,
          project_id: 3,
        },
      ]);
    });
};
