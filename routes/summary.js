const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/summary')
  .get(controllers.summary.getSummaryController)

module.exports = router