const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/candidate_state')
  .get(controllers.candidate_state.getAllCandidateStatesController)

router.route('/candidate_state/:id')
  .get(controllers.candidate_state.getCandidateStateByIdController)

module.exports = router
