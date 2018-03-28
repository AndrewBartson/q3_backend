const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const knex = require('./db');

app.disable('x-powered-by');
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

const states_summary = [
  { 'id': 0, 'key': 0, 'regionName':'Alabama','code':'AL', 'electoral_votes': 9, 'group': 1, 'margin': 27.73 },
  { 'id': 1, 'key': 1, 'regionName':'Alaska','code':'AK', 'electoral_votes': 3, 'group': 3, 'margin': 14.73 },
  { 'id': 2, 'key': 2, 'regionName':'Arizona','code':'AZ', 'electoral_votes': 11, 'group': 4, 'margin': 3.55 },
  { 'id': 3, 'key': 3, 'regionName':'Arkansas','code':'AR', 'electoral_votes': 6, 'group': 1, 'margin': 26.92 },
  { 'id': 4, 'key': 4, 'regionName':'California','code':'CA', 'electoral_votes': 55, 'group': 8, 'margin': 30.11 },
  { 'id': 5, 'key': 5, 'regionName':'Colorado','code':'CO', 'electoral_votes': 9, 'group': 5, 'margin': 4.91 },
  { 'id': 6, 'key': 6, 'regionName':'Connecticut','code':'CT', 'electoral_votes': 7, 'group': 6, 'margin': 13.64 },
  { 'id': 7, 'key': 7, 'regionName':'Delaware','code':'DE', 'electoral_votes': 3, 'group': 6, 'margin': 11.37 },
  { 'id': 8, 'key': 8, 'regionName':'Florida','code':'FL', 'electoral_votes': 29, 'group': 4, 'margin': 1.20 },
  { 'id': 9, 'key': 9, 'regionName':'Georgia','code':'GA', 'electoral_votes': 16, 'group': 3, 'margin': 5.13 },
  { 'id': 10, 'key': 10, 'regionName':'Hawaii','code':'HI', 'electoral_votes': 4, 'group': 8, 'margin': 32.18 },
  { 'id': 11, 'key': 11, 'regionName':'Idaho','code':'ID', 'electoral_votes': 4, 'group': 1, 'margin': 31.77 },
  { 'id': 12, 'key': 12, 'regionName':'Illinois','code':'IL', 'electoral_votes': 20, 'group': 7, 'margin': 17.06 },
  { 'id': 13, 'key': 13, 'regionName':'Indiana','code':'IN', 'electoral_votes': 11, 'group': 2, 'margin': 19.17 },
  { 'id': 14, 'key': 14, 'regionName':'Iowa','code':'IA', 'electoral_votes': 6, 'group': 3, 'margin': 9.41 },
  { 'id': 15, 'key': 15, 'regionName':'Kansas','code':'KS', 'electoral_votes': 6, 'group': 2, 'margin': 20.60 },
  { 'id': 16, 'key': 16, 'regionName':'Kentucky','code':'KY', 'electoral_votes': 8, 'group': 1, 'margin': 29.84 },
  { 'id': 17, 'key': 17, 'regionName':'Lousiana','code':'LA', 'electoral_votes': 8, 'group': 2, 'margin': 19.64 },
  { 'id': 18, 'key': 18, 'regionName':'Maine','code':'ME', 'electoral_votes': 4, 'group': 5, 'margin': 2.96 },
  { 'id': 19, 'key': 19, 'regionName':'Maryland','code':'MD', 'electoral_votes': 10, 'group': 8, 'margin': 26.42 },
  { 'id': 20, 'key': 20, 'regionName':'Massachusetts','code':'MA', 'electoral_votes': 11, 'group': 8, 'margin': 27.20 },
  { 'id': 21, 'key': 21, 'regionName':'Michigan','code':'MI', 'electoral_votes': 16, 'group': 4, 'margin': 0.22 },
  { 'id': 22, 'key': 22, 'regionName':'Minnesota','code':'MN', 'electoral_votes': 10, 'group': 5, 'margin': 1.52 },
  { 'id': 23, 'key': 23, 'regionName':'Mississippi','code':'MS', 'electoral_votes': 6, 'group': 2, 'margin': 17.83 },
  { 'id': 24, 'key': 24, 'regionName':'Missouri','code':'MO', 'electoral_votes': 10, 'group': 2, 'margin': 18.64 },
  { 'id': 25, 'key': 25, 'regionName':'Montana','code':'MT', 'electoral_votes': 3, 'group': 2, 'margin': 20.42 },
  { 'id': 26, 'key': 26, 'regionName':'Nebraska','code':'NE', 'electoral_votes': 5, 'group': 1, 'margin': 25.05 },
  { 'id': 27, 'key': 27, 'regionName':'Nevada','code':'NV', 'electoral_votes': 6, 'group': 5, 'margin': 2.42 },
  { 'id': 28, 'key': 28, 'regionName':'New Hampshire','code':'NH', 'electoral_votes': 4, 'group': 5, 'margin': 0.37 },
  { 'id': 29, 'key': 29, 'regionName':'New Jersey','code':'NJ', 'electoral_votes': 14, 'group': 6, 'margin': 14.10 },
  { 'id': 30, 'key': 30, 'regionName':'New Mexico','code':'NM', 'electoral_votes': 5, 'group': 6, 'margin': 8.21 },
  { 'id': 31, 'key': 31, 'regionName':'New York','code':'NY', 'electoral_votes': 29, 'group': 7, 'margin': 22.49 },
  { 'id': 32, 'key': 32, 'regionName':'North Carolina','code':'NC', 'electoral_votes': 15, 'group': 4, 'margin': 3.66 },
  { 'id': 33, 'key': 33, 'regionName':'North Dakota','code':'ND', 'electoral_votes': 3, 'group': 1, 'margin': 35.73 },
  { 'id': 34, 'key': 34, 'regionName':'Ohio','code':'OH', 'electoral_votes': 18, 'group': 3, 'margin': 8.13 },
  { 'id': 35, 'key': 35, 'regionName':'Oklahoma','code':'OK', 'electoral_votes': 7, 'group': 1, 'margin': 37.08 },
  { 'id': 36, 'key': 36, 'regionName':'Oregon','code':'OR', 'electoral_votes': 7, 'group': 6, 'margin': 10.98 },
  { 'id': 37, 'key': 37, 'regionName':'Pennsylvania','code':'PA', 'electoral_votes': 20, 'group': 4, 'margin': 0.72 },
  { 'id': 38, 'key': 38, 'regionName':'Rhode Island','code':'RI', 'electoral_votes': 4, 'group': 7, 'margin': 15.51 },
  { 'id': 39, 'key': 39, 'regionName':'South Carolina','code':'SC', 'electoral_votes': 9, 'group': 3, 'margin': 14.27 },
  { 'id': 40, 'key': 40, 'regionName':'South Dakota','code':'SD', 'electoral_votes': 3, 'group': 1, 'margin': 29.79 },
  { 'id': 41, 'key': 41, 'regionName':'Tennessee','code':'TN', 'electoral_votes': 11, 'group': 1, 'margin': 26.01 },
  { 'id': 42, 'key': 42, 'regionName':'Texas','code':'TX', 'electoral_votes': 38, 'group': 3, 'margin': 9.00 },
  { 'id': 43, 'key': 43, 'regionName':'Utah','code':'UT', 'electoral_votes': 6, 'group': 2, 'margin': 18.08 },
  { 'id': 44, 'key': 44, 'regionName':'Vermont','code':'VT', 'electoral_votes': 3, 'group': 8, 'margin': 26.41 },
  { 'id': 45, 'key': 45, 'regionName':'Virginia','code':'VA', 'electoral_votes': 13, 'group': 6, 'margin': 5.32 },
  { 'id': 46, 'key': 46, 'regionName':'Washington','code':'WA', 'electoral_votes': 12, 'group': 7, 'margin': 15.71 },
  { 'id': 47, 'key': 47, 'regionName':'West Virginia','code':'WV', 'electoral_votes': 5, 'group': 1, 'margin': 42.07 },
  { 'id': 48, 'key': 48, 'regionName':'Wisconsin','code':'WI', 'electoral_votes': 10, 'group': 4, 'margin': 0.76 },
  { 'id': 49, 'key': 49, 'regionName':'Wyoming','code':'WY', 'electoral_votes': 3, 'group': 1, 'margin': 46.30 }
];

let routes = require('./routes');
app.use(routes.candidates);
app.use(routes.american_state);
app.use(routes.candidate_state);

app.get('/summary', (req, res, next) => {
  res.json({ states_summary })
})

// runs if flow of control gets here
app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})
// runs whenever next is called with a parameter, not empty.
app.use((err, req, res, next) => {
  console.log('err.status - ', err.status);
  res.status(500).json({error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
