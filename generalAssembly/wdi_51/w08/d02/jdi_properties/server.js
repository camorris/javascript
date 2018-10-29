const 
    express = require ('express'),
    app = express(),
    logger = require ('morgan'),
    bodyParser = require ('body-parser'),
    mongoose = require ('mongoose'),
    PORT = 3000
    propertiesRouter = require ('./routes/properties.js')
    ejsLayouts = require('express-ejs-layouts')

    mongoose.connect('mongod://localhost/jdi_properties', (err)=>{
        console.log(err || 'Connected to Mongod')
    })

    app.set('view enging', 'ejs')

    app.use('ejsLayouts')

    app.use(logger,('dev'))

    app.use(bodyParser.json())

    app.use(bodyParser.urlencoded())

    app.use(express.static(`${__dirname}/public`))

    app.get('/', (req,res)=>{
        res.render('home')
    })
    
    app.use('/videos', videosRouter)
    
    app.listen(PORT, (err) =>{
        console.log(err || `Server running on ${PORT}`)
    })

