let model = require('../models');

function getAllCandidateStatesController(req, res, next) {
  model.candidate_state.getAllCandidateStates()
    .then((result) => {
      res.status(200).json(result);
    })
}

function getCandidateStateByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.candidate_state.getCandidateStateById(req.params.id)
      .then((result) => {
        if(result) {
          res.status(200).json(result);
        }
        else {
          res.status(404);
          next({message: 'ID not found'});
        }
      })
    }
}

module.exports = {
  getAllCandidateStatesController,
  getCandidateStateByIdController
}