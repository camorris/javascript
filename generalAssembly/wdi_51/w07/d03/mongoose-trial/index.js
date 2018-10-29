const 

    express = require('express'),// express is the router and controller together
    app = express(),
    mongoose = require ('mongoose'),//is the something that connects you to MongoDb
    port = 3000,
    Dinosaur = require('./models/Dinosaur.js'),//this is our only current model
    bodyParser = require('body-parser')// interprets incoming body data from postman

mongoose.connect('mongodb://localhost/dinosaurs', function(err){//this function make sure we can connect to the mongoose database
    console.log(err || "Connected to mongodb")
})

app.use(bodyParser.json())// this tell the system we want to use json in postman

app.get('/', function(req,res){// this will list all of what we would look at in this example dinosaurs
    
    Dinosaur.find({}, function(err,dinosaurs){
        if (err) console.log(err)
        res.send(dinosaurs)//
    })
})//this function is the controller

//show a specifc thing for example dinosaurs
app.get('/dinosaurs/:id',function(req, res){
    // find a specific dinosaur by its id
    Dinosaur.findById(req.params.id, function(err, foundDinosaur){
    res.send(foundDinosaur)
})
   
})
//create your dino
app.post('/dinosaurs', function(req,res){

        Dinosaur.create(req.body, function(err, newDinosaur){
        res.send('created your dinosaur')
    })
})
//update my dino line 40 sets the route and function
app.patch('/dinosaurs/:id', function(req,res){
    Dinosaur.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedDino){
        res.send(updatedDino)
    })

})
//implement the ice age or meteor for my dino 
app.delete('/dinosaurs/:id', function(req, res){
    Dinosaur.findByIdAndRemove(req.params.id, function(err, deletedDino){
        res.send(deletedDino.species + " was deleted.")
    })
})

    app.listen(port, function(err){
    console.log(err || `server running on ${port}.`)

})