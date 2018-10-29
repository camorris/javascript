const
    Property = require('../models/Video.js')

    module.exports = {
        index: (req,res)=>{
            Property.find({}, (err, properties)=>{
                if(err) return console.log(err)
                // res.json(videos)
                res.render('properties/index',{properties})
            })
        },

        create: (req,res)=>{
            var newProperty = new Video(req.body)
            newProperty.save((err,property)=>{
                if(err) return console.log(err)
                res.redirect('/properties')
            })
        },

        show:(req,res)=>{
            Property.findById(req.params.id, (err, theProperty)=>{
                // res.json(theVideo)
                res.render('properties/show', {property: theProperty})
            })
        },

        new:(req,res)=>{
            res.render('properties/new')
        },

        destroy: (req,res)=>{
            Video.findByIdAndRemove(req.params.id,(err, deletedProperty)=>{
                if(err) return console.log(err)
                res.json(propertyVideo)
                res.json({success: true, message: "Property Deleted"})
            })
        },

        edit: (req,res)=>{
            Video.findByIdAndUpdate(req.params.id,(err, updatedVideo)=>{
                res.json(updatedVideo)
            })
        }
    }