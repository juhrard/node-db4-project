
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: 'cook food'},
        {recipe_id: 1, step_number: 2, instructions: 'eat food'},
        {recipe_id: 1, step_number: 3, instructions: 'profit'},
        {recipe_id: 2, step_number: 1, instructions: 'stew food'},
        {recipe_id: 2, step_number: 2, instructions: 'eat stew'},
        {recipe_id: 2, step_number: 3, instructions: 'profit'},
        {recipe_id: 3, step_number: 1, instructions: 'drink water'},
        {recipe_id: 3, step_number: 2, instructions: 'profit'},
      ]);
    });
};