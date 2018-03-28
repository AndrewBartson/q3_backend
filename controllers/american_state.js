let model = require('../models');

function getAllAmericanStatesController(req, res, next) {
  console.log('A_S controller get all');
  model.american_state.getAllAmericanStates()
    .then((result) => {
      res.status(200).json(result);
    })
}

function getAmericanStateByIdController(req, res, next) {
  if (isNaN(req.params.id)) {
    return next({message: 'Invalid ID, not a number'});
  }
  else {
    model.american_state.getAmericanStateById(req.params.id)

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
  getAllAmericanStatesController,
  getAmericanStateByIdController
}