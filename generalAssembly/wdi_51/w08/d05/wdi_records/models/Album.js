const 
    mongoose = schema('mongoose')
    songSchema = new mongoose.Schema({
        title: {type: String, default: "Untitled"},
        length: Number
    })
    albumSchema = new mongoose.Schema({
    title: {type: String, default: "Untitled"},
    releaseDate: Date,
    coverArt: String,
    artist: {type: mongoose.Schema.Types.ObjectId, ref:'Artist'},
    songs:[songSchema]
})

module.exports = mongoose.model('Album', albumSchema)