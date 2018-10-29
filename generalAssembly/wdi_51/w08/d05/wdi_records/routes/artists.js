const 
    express = require('express')
    artistisRouter = new express.Router()
    Artist = require('../models/Artist.js')
    Album = require ('../models/Album.js')

artistsRouter.route('/')

    .get((req,res)=>{
        Artist.find({},(err,artists) =>{
        res.json(artists)
        })
    })
    .post((req,res)=>{
        Artist.create(req.body, (err,artist)=>{
        res.json({success: true, message: "Artist created! 🤘🏾"})
    })

})

artistsRouter.route('/:id')

    .get((req,res)=>{
        Artist.findById(req.params.id,(err, artist)=>{
            res.json(artist)
        })
    })

    .patch((req,res)=>{
        Artist.findByIdAndUpdate(req.params.id, req.body,(err)=>{
            res.json(artist)
        })
    })

    .delete((req,res)=>{
        Artist.findByIdandRemove(req.params.id, (err)=>{
            res.json({message: "thing deleted"})
        })
    
    })


//ALBUMS
artistsRouter.route('/:id/albums')
    .get((req,res)=>{

        Album.find({artist: req.params.id},(err,albums)=>{
            res.json(albums)

        })
    })
    .post((req,res)=>{
        var newAlbum = new Album(req.body)
        newAlbum.artist = req.params.id
        newAlbum.save((err, album)=>{
            res.json({success:true, message: "Album created!", album: album})
        })

    })
module.exports = artistsRouter