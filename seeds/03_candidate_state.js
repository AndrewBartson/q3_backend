let input = require('../seed_data/candidate_state_input.js')

exports.seed = function(knex, Promise) {
  return knex('candidate_state').del()
    .then(function () {
      return knex('candidate_state').insert(input);
    })
    .then(() => {
      return knex.raw(
    `SELECT setval('candidate_state_id_seq', (SELECT MAX(id) FROM candidate_state));`
    );
  })
};