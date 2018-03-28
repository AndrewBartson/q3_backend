let knex = require('../db');

function getAllCandidateStates() {
  return knex('candidate_state');
}

function getCandidateStateById(id) {
  return knex('candidate_state')
    .where('id', id)
    .first();
}

module.exports = {
  getAllCandidateStates,
  getCandidateStateById
}