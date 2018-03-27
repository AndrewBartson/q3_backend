let input = require('../seed_data/states_input.js')

exports.seed = function(knex, Promise) {
  return knex('states').del()
    .then(function () {
      return knex('states').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('users_id_seq', (SELECT MAX(id) FROM states));`
    );
  })
};