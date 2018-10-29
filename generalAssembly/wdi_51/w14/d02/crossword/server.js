const
  dotenv = require('dotenv').load(),
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/crossword',
  PORT = process.env.PORT || 3001,
  http = require('http'),
  httpServer = http.Server(app),
  socketio = require('socket.io'),
  io = socketio(httpServer)
  // Message = require('./models/Message'),
	// apiai = require('apiai')(process.env.APIAI_TOKEN),
	// usersRoutes = require('./routes/users.js')
  

mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || `Connected to MongoDB.`)
})


app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
res.json({message: "API root."})
})

// app.use('/api/users', usersRoutes)

app.get('/users', (req, res) => {
User.find({}, (err, users) => {
  res.json(users)
})
})

io.on('connection', (socketio) => {
console.log('A user connected ' + socketio.id)
})



app.use('*', (req, res) => {
res.sendFile(`${__dirname}/client/build/index.html`)
})

httpServer.listen(PORT, (err) => {
console.log(err || `Server running on port ${PORT}.`)
})