
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'ramen'},
        {recipe_name: 'stew'},
        {recipe_name: 'water'}
      ]);
    });
};
