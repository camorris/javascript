const
express = require('express'),
app = express(),
logger = require('morgan'),
bodyParser = require('body-parser'),
mongoose = require('mongoose')
artistsRoutes = require ('./routes/artists')
albumsRoutes = require('./routes/albums.js')

mongoose.connect('mongodb://localhost/wdi-records', (err) => {
console.log(err || 'Connected to MongoDB.')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
res.json({message: "The root."})
})

app.use('/artists', artistsRoutes)
app.use('/albums', albumsRoutes)

app.listen(3000, (err) => {
console.log(err || `Server running on port 3000.`)
})