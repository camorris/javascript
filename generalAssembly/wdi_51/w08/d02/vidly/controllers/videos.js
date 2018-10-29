const
// this variable allows us to retriever the data out of the models folder and then out of the file
    Video = require('../models/Video.js')
//this is where we set our controller functions for the routes. this helps us consolidate our files
    module.exports = {
        index: (req,res)=>{
            Video.find({}, (err, videos)=>{
                if(err) return console.log(err)
                // res.json(videos)
                res.render('videos/index',{videos})
            })
        },

        create: (req,res)=>{
            var newVideo = new Video(req.body)
            newVideo.save((err,video)=>{
                if(err) return console.log(err)
                res.redirect('/videos')
            })
        },

        show:(req,res)=>{
            Video.findById(req.params.id, (err, theVideo)=>{
                // res.json(theVideo)
                res.render('videos/show', {video: theVideo})
            })
        },

        new:(req,res)=>{
            res.render('videos/new')
        },

        destroy: (req,res)=>{
            Video.findByIdAndRemove(req.params.id,(err, deletedVideo)=>{
                if(err) return console.log(err)
                res.json(deletedVideo)
                res.json({success: true, message: "Video Deleted"})
            })
        },

        edit: (req,res)=>{
            Video.findByIdAndUpdate(req.params.id,(err, updatedVideo)=>{
                res.json(updatedVideo)
            })
        }
    }