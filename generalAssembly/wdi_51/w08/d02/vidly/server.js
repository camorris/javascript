const 
    express = require ('express'),
    app = express(),
    logger = require ('morgan'),
    bodyParser = require ('body-parser'),
    mongoose = require ('mongoose'),
    PORT = 3000
    videosRouter = require ('./routes/videos.js')
    ejsLayouts = require('express-ejs-layouts')


    mongoose.connect('mongodb://localhost/vidly', (err)=>{
        console.log(err|| 'Connected to Mongod')
    })
//this will default to views directory and enable ejs package we installed
    app.set('view engine', 'ejs')
//this allows us to use ejs package
    app.use(ejsLayouts)
// this will printout that a request was sent
    app.use(logger('dev'))
//the body parser will parse it and turn it into javascript
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded())//this will allow our app to understand form data
    app.use(express.static(`${__dirname}/public`))

//this is our root route where all the video will go
    app.get('/',(req, res)=>{
        // res.json({message: "The root. Is on fire🔥"})
        res.render('home')
    })

    // this is where our video routes will go...
    // const Video = require('./models/Video.js')
    // app.get('/videos', (req,res)=>{
    //     Video.find({}, (err, videos)=>{
    //         if(err) return console.log(err)
    //         res.json(videos)
    //     })
    // }) ****THIS GOT DELETED BECAUSE WE CREATED VIDEOS.JS WHICH IS DEDICATED TO OUR ROUTES
app.use('/videos', videosRouter)

app.listen(PORT, (err) =>{
    console.log(err || `Server running on ${PORT}`)
})