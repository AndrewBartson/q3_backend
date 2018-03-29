let model = require('../models');

function getSummaryController(req, res, next) {
  model.summary.getSummary()
    .then((result) => {
      res.status(200).json(result);
    })
};

module.exports = {
  getSummaryController
}
