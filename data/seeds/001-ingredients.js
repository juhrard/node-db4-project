
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'noodles', recipe_id: 1},
        {ingredient_id: 2, ingredient_name: 'beef', recipe_id: 2},
        {ingredient_id: 3, ingredient_name: 'water', recipe_id: 3}
      ]);
    });
};
