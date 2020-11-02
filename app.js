const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require("path");
const app = express();

MongoClient.connect('mongodb-connection-string', (err, client) => {
  app.use(express.static(path.resolve(__dirname, ".", "dist")));
  app.use(bodyParser.urlencoded({ extended: true }))

  app.post('/quotes', (req, res) => {
    //
  })

  app.get("/api", (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "dist", "index.html"));
  });

  app.listen(9000, function () {
    console.log('listening on port 9000');
  })


})



module.exports = app;