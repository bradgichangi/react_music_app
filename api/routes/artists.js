const path = require('path')
const express = require('express')

const router = express.Router()
const artistData = require('../db/data.json')

router.get('/', (req, res) => res.send(artistData))

module.exports = router