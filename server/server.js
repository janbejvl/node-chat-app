const http = require('http')
const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const bodyParser = require('body-parser')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', (socket) => {
    console.log('Client disconnected');
  })
})

server.listen(port, () => {
  console.log(`Server is live on port ${port}`)
})

module.exports = { app }

