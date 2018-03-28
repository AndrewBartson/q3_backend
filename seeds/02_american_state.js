let input = require('../seed_data/american_state_input.js')

exports.seed = function(knex, Promise) {
  return knex('american_state').del()
    .then(function () {
      return knex('american_state').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('american_state_id_seq', (SELECT MAX(id) FROM american_state));`
    );
  })
};