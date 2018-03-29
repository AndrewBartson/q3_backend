let model = require('../models');

function getAllCandidatesController(req, res, next) {
  model.candidates.getAllCandidates()
    .then((result) => {
      res.status(200).json(result);
    })
}

function getCandidateByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.candidates.getCandidateById(req.params.id)
      .then((result) => {
        if(result) {
          res.status(200).json(result);
        }
        else {
          res.status(404);
          next({message: 'ID not found'});
        }
      })
      .catch(err => console.log(err))
    }
}

module.exports = {
  getAllCandidatesController,
  getCandidateByIdController
}