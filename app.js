// To run linter: ./node_modules/.bin/eslint app.js
var express = require('express')
var app = express()

// Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Launch listening server on port 8080
app.listen(4000, function () {
  console.log('App listening on port 4000!')
})