const fs = require('fs')
const Component = require('../models/component')
// const products = JSON.parse(fs.fstatSync('./../../../products.json'))
const products = require('./../../../products.json')
const insertComponents = async (req, res, next) => {
  try {
    console.log(products)

    await Component.insertMany(products)

    return res.status(200).json('All components uploaded to Database')
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

module.exports = { insertComponents }
