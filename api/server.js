const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(express.json())

const artistRoutes = require('./routes/artists')

server.use('/artists', artistRoutes)

server.get('/', (req, res) => res.send('<h1>React Music App Backend</h1>'))

module.exports = server