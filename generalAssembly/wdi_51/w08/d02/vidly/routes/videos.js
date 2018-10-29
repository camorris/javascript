const
    express = require('express'),
    videosRouter = new express.Router()
    videosCtrl = require('../controllers/videos.js')
    


    // videosRouter.get('/',videosCtrl.index)

    // videosRouter.post('/',videosCtrl.create )

    // videosRouter.get('/:id', videosCtrl.show )

    // videosRouter.delete('/:id', videosCtrl.destroy)

    // videosRouter.patch('/:id', videosCtrl.edit)



    // -----you can write your routes like above orrr like below-----

    videosRouter.route('/')
        .get(videosCtrl.index)
        .post(videosCtrl.create)

    videosRouter.get('/new', videosCtrl.new)

    videosRouter.route('/:id')
        .get(videosCtrl.show)
        .delete(videosCtrl.destroy)

    module.exports = videosRouter