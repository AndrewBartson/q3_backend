
let knex = require('../db');

function getModalData(stateCode){
  let statement = `SELECT * FROM candidates
  LEFT JOIN candidate_state ON candidates.id = candidate_state.candidate_id
  LEFT JOIN american_state ON candidate_state.american_state_id = american_state.id
  WHERE american_state.state_code = '${stateCode}'`
  return knex.raw(statement);
}

module.exports = {
  getModalData,
}
