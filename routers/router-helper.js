const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findIngredients,
  findSteps,
  add,
  update,
  remove,
};

function find() {
  return db("recipes");
}

function findById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps")
  .join("recipes", "recipes.id", "steps.recipe_id")  
  .select("steps.step_number", "steps.instructions", "steps.recipe_id")
  .where("recipe_id", id)
  .orderBy("steps.step_number", "asc");
}

function findIngredients(id) {
  return db("ingredients")
  .join("recipes", "recipes.id", "ingredients.recipe_id")  
  .select("ingredients.ingredient_name", "ingredients.ingredient_id")
  .where("recipe_id", id)
}

function add(recipe) {
  return db("recipes").insert(recipe, "id");
}

function update(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("recipes")
    .where({ id })
    .del();
}