let knex = require('../db');

function getAllAmericanStates() {
  return knex('american_state');
}

function getAmericanStateById(id) {
  return knex('american_state')
    .where('id', id)
    .first();
}

module.exports = {
  getAllAmericanStates,
  getAmericanStateById
}