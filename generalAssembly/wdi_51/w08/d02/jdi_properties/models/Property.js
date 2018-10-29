const 
    mongoose = require('mongoose')

    propertySchema = new mongoose.Schema({
        location: {type: String, required: true},
        rent: {type: Number, required: true},
        bedrooms: {type: Number, required: true},
        roommates: {type: String, default: "Not Specified"}
    },{timestamps: true})

    module.exports = mongoose.model('Property', propertySchema)