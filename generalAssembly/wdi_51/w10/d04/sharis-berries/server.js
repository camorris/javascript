const 
  express = require ('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  PORT = process.env.PORT || 3001
  mongoose = require ('mongoose')
  Berry = require('./models/Berry')

  app.use(logger('dev'))
  app.use(bodyParser.json())

  
  app.get('/api', (req, res)=> {
    res.json({message: "api root!"})
  })

app.get('/api/berries', (req,res)=> {
  res.json(berries)
})

app.post('/api/berries',(req,res)=>{
Berry.create(req.body, ())
  console.log('req.body')
  res.json({message: "berry created....."})
})

  app.listen(PORT, (err)=>{
    console.log(err || `Server running on port ${PORT}.`)
  })