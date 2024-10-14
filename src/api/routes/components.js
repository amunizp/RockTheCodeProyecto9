const { insertComponents } = require('../controllers/components')
const { getMaxListeners } = require('../models/component')

const componentsRouter = require('express').Router()

componentsRouter.post('/uploadComponents', insertComponents)

module.exports = componentsRouter
