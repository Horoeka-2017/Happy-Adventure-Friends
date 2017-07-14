var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')

router.get('/', (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname + '/index.html'))
=======
  res.render('main', { hi: 'hello world' })
>>>>>>> e1286ec649ceb156c86e93486bc31222c710357c
})

router.get('/story/:id', (req, res) => {
      if (req.params.id === //storyid1)
      })
    // router.get('/character', (req, res) => {
    //   res.render('./layouts/character', characterChoice)
    // })

    module.exports = router