const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Server is live on port ${port}`)
})

module.exports = { app }

