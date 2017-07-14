var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

router.get('/story/:id', (req, res) => {
      if (req.params.id === //storyid1)
      })
    // router.get('/character', (req, res) => {
    //   res.render('./layouts/character', characterChoice)
    // })

    module.exports = router