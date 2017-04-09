// ./index.js
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/app'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'app', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)