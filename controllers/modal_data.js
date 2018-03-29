let model = require('../models');

function getModalDataController(req, res, next) {
  model.modal_data.getModalData()
    .then((result) => {
      res.status(200).json(result);
    })
};

module.exports = {
  getModalDataController
}
