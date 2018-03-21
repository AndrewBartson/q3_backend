const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

const candidates = [
  { id: 1, name: 'Ludacris', party: 'Players', votes: 0 },
  { id: 2, name: 'Tupac', party: 'Momma', votes: 1 },
  { id: 3, name: 'LL Cool J', party: 'Pool', votes: 0 },
]

app.get('/candidates', (req, res, next) => {
  res.json({ candidates })
})

app.post('/candidates', (req, res, next) => {
  const newCandidate = req.body.candidate
  candidates.push(newCandidate)
  res.json({ newCandidate })
})

app.post('/vote/:candidate_id', (req, res, next) => {
  const cid = parseInt(req.params.candidate_id)
  const candidate = candidates.find((c) => c.id === cid)
  candidate.votes++
  res.send(true)
})

// const routes = require('./routes')
// app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
