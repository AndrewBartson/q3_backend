
let knex = require('../db');

function getModalData(){
  return knex('candidates');
}






module.exports = {
  getModalData,
}
