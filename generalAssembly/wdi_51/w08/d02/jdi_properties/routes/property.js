const
    express = require('express'),
    propertiesRouter = new express.Router()
    propertiessCtrl = require('../controllers/properties.js')

    propertiesRouter.route('/')
        .get(propertiesCtrl.index)
        .post(propertiesCtrl.create)

    propertiesRouter.get('/new', propertiesCtrl.new)

    propertiesRouter.route('/:id')
        .get(propertiesCtrl.show)
        .delete(propertiesCtrl.destroy)

module.exports = propertiesRouter