const
    express = require ('express')
    mongoose = require ('mongoose')
    app = express()
    PORT = 3001
//this creates apartments in RAM but doesnt save it to memory we would need a database
    var apartments = [{location: " Inglewood", bedroom: 1, rent:1500}, {location:"santa monica", bedroom:2, rent:3000}]
// connect to MongoDb by doing the following
    const mongoDBURL = 'mongodb://localhost/apartment_api'
// this function will return an err if it does not conect
    mongoose.connect(mongoDBURL, function(err){

        if (err) {
            console.log(err)
        } else { console.log("Successfully Connected to", mongoDBURL)}
    })
// this is how you create Model
    const Apartment = mongoose.model('Apartment',{location: String, bedroom: Number, rent: Number})

// this will list all my apartments
    app.get('/apartments', (req,res)=>{
        res.json(apartments)//this connects from memory
        Apartment.find({}, function(err, result){ // this will find all of my apartments in the mongoose database
            if (err) console.log(err)
            else res.json(result)
        })
    })
// this will find a specific apartment
    app.get('/apartments/:id', (req,res)=>{
        // res.json(apartments[req.params.id])//this connects from memory
        Apartment.findById(req.params.id, function(err, result){
            res.json(result)
        })
    })

    app.post('/apartments/test', (req, res)=>{
        console.log('inside of post apartments/test')
        //creates a test doucment
        var testApartment = new Apartment ({location: "SOmewhere", bedroom: 2, rent: 900 })
        console.log('about to save testApartment')
        //commit save
        testApartment.save(function(err, a){//this function is to save all the apartments that get saved
            if (err) console.log(err)
            console.log('just saved testApartmnet')
            console.log('sending the response')
            res.send("Your test apartment got saved")//this will show in the client side view
            console.log('done')
        })
        
    })




    app.listen(PORT, function() {
    console.log(`Server started on port : ${PORT}`)//back ticks allow you to do string interpolation and multi line 
})