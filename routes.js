var express = require('express')
var router = express.Router()
var db = require('./db.js')

router.get('/', (req, res) => {
  res.render('main', { hi: 'hello world' })
})

module.exports = router