const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
server.use('/', routes)

module.exports = server
