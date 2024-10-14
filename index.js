require('dotenv').config()
const express = require('express')
const connectMongo = require('./src/config/connectMongo')
const cors = require('cors')
const componentsRouter = require('./src/api/routes/components')
const app = express()
connectMongo()
app.use(cors())

app.use('/api/v1/components', componentsRouter)

app.use('*', (req, res, next) => {
  console.log('failed to use the app')
  return res.status(404).json('Try to ammend the URL to get a better route')
})
port = 3000

app.listen(port, () => {
  console.log(`OK connected to node server http://localhost:${port}  🤝 `)
})
