const   
     express = require('express'),
     albumsRouter = new express.Router(),
     Album = require('../models/Album.js')

albumsRouter.route('/')
    .get((req,res)=>{
        Album.find({}, (err,albums)=>{
            res.json(albums)
        })
    })

    albumsRouter.route('/:id')
        .get((req, res)=>{
            Album.findById(req.params.id).populate('artist').exec((err,album)=>{
                res.json(album)
            })
        })
    albumsRouter.route('/:id/songs')
        .post((req,res)=>{
            Album.findById(req.params.id, (err,album)=>{
                album.songs.push(req.body)
                album.save((err,updatedAlbum)=>{

            res.json({success: true, message:"Song created", album: album})
                })
             })
        })
    
albumsRouter.route('/:albumId/songs:songId')
        .patch((req, res)=> {
            Album.findById(req.params.albumId, (err,album)=>{
                var song = album.songs.id(req.params.songId)
                Object.assign(song, req.body)
                album.save((err, updatedAlbum)=>{
                    res.json({success: true, message: "Album updated", album: updatedAlbum})
                })
            })
        })
        .delete((req, res)=>{
            
        })

module.exports = albumsRouter
