var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')

router.get('/', (req, res) => {
  res.render('main', { hi: 'hello world' })
})

<<<<<<< HEAD
router.get('/story/:id', (req, res) => {
  if (req.params.id === //storyid1)
      })
// router.get('/character', (req, res) => {
//   res.render('./layouts/character', characterChoice)
// })

module.exports = router
=======
module.exports = router\
>>>>>>> max-ali
