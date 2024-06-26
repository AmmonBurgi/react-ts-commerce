const express = require('express')
const path = require('path')

const app = express()

// -------Middleware-------

app.use(express.json())
// app.use(express.static(__dirname + '/../public'))
app.use(express.static(__dirname + '/../build'))

// -------Middleware-------

app.get('/api/ping', (req, res) => res.send("Hello, I'm the server!"))

// Serve build of react application
app.get('*', (req, res) => {
  console.log("Serving Build!")
  res.sendFile(path.join(__dirname, '../build/index.html'))
});

module.exports = app