const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findInfo,
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

function findInfo(id) {
  return db("steps")
  .join("recipes", "ingredients", "recipes.id", "steps.recipe_id", "ingredients.recipe_id")  
  .select("steps.step_number", "steps.instructions", "steps.recipe_id")
  .where("recipe_id", id)
  .orderBy("steps.step_number", "asc");
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