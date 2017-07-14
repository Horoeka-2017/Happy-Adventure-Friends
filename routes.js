var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')

// var storyStageOne = require('./data-files/story-stage1')
// router.get('/', (req, res) => {

//   res.sendFile(path.join(__dirname + '/index.html'))
// })

router.get('url/1', (req, res) => {
  fs.readFile('/data-files/story-stage1', 'utf8', (err, storyComplete) => {
    if (err) {
      return res.status(500).send('An error has occurred')
    } else {
      var storyObj = JSON.parse(storyComplete)

      var foundStory = storyObj.stories.find((storySeg) => {
        if (storySeg.id === Number(req.params.id)) {
          return true
            // this can be changed to return storySeg.id === Number(req.params.id)
        }
      })
      res.render('play-page', foundStory)
    }
  })
})

stories.options[0]



// router.get('/character', (req, res) => {
//   res.render('./layouts/character', characterChoice)
// })

module.exports = router