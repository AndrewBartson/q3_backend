const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/modal_data/:state_code')
  .get(controllers.modal_data.getModalDataController)

module.exports = router
