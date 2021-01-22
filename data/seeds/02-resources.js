exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        {
          resource_name: "Protein Powder",
          resource_description: "Whey, coligen, and egg",
        },
        { resource_name: "Beef", resource_description: "Ground" },
        {
          resource_name: "Chicken",
          resource_description: "Sous vide for easy eating",
        },
        { resource_name: "Lamb", resource_description: "Mix up the meats" },
        { resource_name: "Yogurt", resource_description: "Healthy fats" },
        { resource_name: "PB&J", resource_description: "Good for bulking" },
        {
          resource_name: "Salmon",
          resource_description:
            "Very healthy, lots of Omega threes—good for Holy days when fasting.",
        },
        { resource_name: "Eggs", resource_description: "Healthy fats" },
        {
          resource_name: "Bananas",
          resource_description: "Potasium for recovery",
        },
        {
          resource_name: "Olives",
          resource_description: "Good source of salt",
        },
        {
          resource_name: "Rice",
          resource_description: "White, healthy grains",
        },
        {
          resource_name: "Battle Ropes",
          resource_description:
            "50 feet, 2 inches wide—for wrist health, overall stability, and cardio shape",
        },
        {
          resource_name: "Weights",
          resource_description:
            "Barbells, kettlebells, farmerbars, sandbags, sled",
        },
        {
          resource_name: "Resistance Bands",
          resource_description: "For mobility",
        },
        { resource_name: "Lacross Ball", resource_description: "For mobility" },
        { resource_name: "Beer Keg", resource_description: "Work T spine" },
        {
          resource_name: "Voodoo Bands",
          resource_description: "Destroy scar tissue build-up",
        },
        {
          resource_name: "Mace",
          resource_description: "Contralateral stability",
        },
      ]);
    });
};
