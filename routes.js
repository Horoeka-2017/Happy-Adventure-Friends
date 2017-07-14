var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')

var storyStageOne = require('./datafiles/story-stage1.json')
router.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/index.html'))
})

router.get('url', (req, res) => {
  fs.readFile('/datafiles/story-stage1.json', 'utf8', (err, storyStage1) => {
    if (err) {
      return res.status(500).send('An error has occurred')
    } else {
      var storyObj = JSON.parse(storyStage1)

      var foundStory = storyObj.stories.find(storySeg) => {
        if (storySeg.id === Number(req.params.id)) {
          return true
        }
      }
      res.render('play-page', foundStory)
    }
  })
})




// router.get('/character', (req, res) => {
//   res.render('./layouts/character', characterChoice)
// })

module.exports = router

