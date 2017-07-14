var express = require('express')
var router = express.Router()
var db = require('./db.js')
var path = require('path')
var fs = require('fs')

var storyStageOne = require('./data-files/story-stage1.json')
// router.get('/', (req, res) => {

//   res.sendFile(path.join(__dirname + '/index.html'))
// })

router.get('/url/:id', (req, res) => {
  fs.readFile('./data-files/story-stage1.json', 'utf8', (err, storyComplete) => {
    if (err) {
      return res.status(500).send(err.message)
    } else {
      var storyObj = JSON.parse(storyComplete)


      var foundStory = storyObj.stories.find((story) => {
        if (story.id === Number(req.params.id)) {
          return true

        }
      })
      res.render('play-page', foundStory)
    }
  })
})
router.get('/end/two', (req, res) => {
  fs.readFile('./data-files/bad-ending.json', 'utf8', (err,
    content) => {
    if (err) {
      return res.status(500).send('Cannot read file')
    }
  
     var story = JSON.parse(content).stories.find(x => {
      return x.id === 8
    })
    res.render('ending', story)
  })
})


router.get('/end/two', (req, res) => {
  fs.readFile('./data-files/good-ending.json', 'utf8', (err,
    content) => {
    if (err) {
      return res.status(500).send('Cannot read file')
    }
    var story = JSON.parse(content).stories.find(x => {
      return x.id === 9
    })
    res.render('ending', story)
  })
})

router.get('/', (req, res) => {
  res.render('homepage', {})
})