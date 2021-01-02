const express = require('express')
var mongo = require('./mongo')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/countries', (req, res) => {
  res.render("countries")
})

app.get('/heads', (req, res) => {
  mongo.getHeads()
    .then((documents) =>{
      res.send(documents)
    })
    .catch((error) => {
      res.send(error)
    })
})

app.get('/cities', (req, res) => {
  res.render("cities")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

