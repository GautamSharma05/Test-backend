const express = require('express')
const app = express()
const jsonCordinates = require('./10serviceLocations');
const port = 8000
const cors = require('cors')

app.use(cors())

app.get('/get-coordinates', (req, res) => {  
  return res.status(200).send(jsonCordinates)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})