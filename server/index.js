const express = require('express')
const path = require('path')

const app = express()
const port = 4040

// -------Middleware-------

app.use(express.json())
app.use(express.static(__dirname + '/../build'))

// -------Middleware-------

app.get('/api/ping', (req, res) => res.send("Hello, I'm the server!"))

// Serve build of react application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.listen(4040, () => console.log(`Server listening on port ${port}`))