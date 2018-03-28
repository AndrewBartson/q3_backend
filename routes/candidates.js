const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/candidates')
  .get(controllers.candidates.getAllCandidatesController)

router.route('/candidates/:id')
  .get(controllers.candidates.getCandidateByIdController)

module.exports = router