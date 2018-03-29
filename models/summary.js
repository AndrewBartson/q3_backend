let knex = require('../db');
let util = require('util');

function getSummary() {
  return knex
   .select('american_state.state_name as regionName',
             'american_state.state_code as code',
             'american_state.electoral_votes',
             'american_state.color_group as group',
             'candidate_state.candidate_id',
             'candidate_state.margin_of_victory as margin'
           )
    .from('american_state')
    .join('candidate_state', 'american_state.id', 'candidate_state.american_state_id')
    .where('candidate_state.margin_of_victory', '>', 0)
}


module.exports = {
  getSummary
}
