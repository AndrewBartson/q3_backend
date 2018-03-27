
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost:5432/election_data'
    }
  },

  production: {
    client: 'pg',
    connection: {
      filename: process.env.DATABASE_URL
    },
  }
};
