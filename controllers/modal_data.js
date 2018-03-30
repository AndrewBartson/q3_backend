let model = require('../models');

function getModalDataController(req, res, next) {
  let stateCode = req.params.state_code;

  model.modal_data.getModalData(stateCode)
          .then((result) => {
            if(result) {

              result = result.rows.map((row) => {
                return {
                  presidentialCandidate: row.presidential_candidate,
                  vicePresidentialCandidate: row.vice_president_candidate,
                  party: row.party,
                  winner: Boolean(row.margin_of_victory),
                  percentageOfVictory: row.margin_of_victory,
                  popularVotePercentage: row.percentage_pop_vote,
                  popularVotes: row.popular_votes,
                  marginOfVictory: row.margin_of_victory,
                  state: row.state_name
                }
              })
              res.status(200).json({candidates: result});
            }
            else {
              res.status(404);
              next({message: 'ID not found'});
            }
          })
}


module.exports = {
  getModalDataController
}
