var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')
const fs = require('fs')

// var storyStageOne = require('./data-files/story-stage1')
// router.get('/', (req, res) => {

//   res.sendFile(path.join(__dirname + '/index.html'))
// })

router.get('/url/1', (req, res) => {
  fs.readFile('./data-files/story-stage1', 'utf8', (err, storyComplete) => {
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

router.get('/end/one', (req, res) => {
  fs.readFile('./data-files/story-stage3.json', 'utf8', (err, content) => {
    if (err) {
      return res.status(500).send('Cannot read file')
    }
    var story = JSON.parse(content).exitLeft
    res.render('ending', story)


  })
})

router.get('/end/two', (req, res) => {
  fs.readFile('/data-files/story-stage3.json', 'utf8', (err, content) => {
    if (err) {
      return res.status(500).send('Cannot read file')
    }
    var story = JSON.parse(content).exitRight
    res.render('ending', story)


  })
})

router.get('/',(req,res) => {
  res.render('homepage',{})
})
// router.get('/character', (req, res) => {
//   res.render('./layouts/character', characterChoice)
// })

module.exports = router