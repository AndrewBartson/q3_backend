const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.route('/modal_data')
  .get(controllers.modal_data.getModalDataController)

module.exports = router
