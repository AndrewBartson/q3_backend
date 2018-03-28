const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/american_state')
  .get(controllers.american_state.getAllAmericanStatesController)

router.route('/american_state/:id')
  .get(controllers.american_state.getAmericanStateByIdController)

module.exports = router