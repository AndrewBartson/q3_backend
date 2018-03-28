let knex = require('../db');

function getAllCandidates() {
  return knex('candidates');
}

function getCandidateById(id) {
  return knex('candidates')
    .where('id', id)
    .first();
}

module.exports = {
  getAllCandidates,
  getCandidateById
}