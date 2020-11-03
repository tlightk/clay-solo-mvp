const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require("path");
const dotenv = require("dotenv").config();
const db = process.env.MONO_DB_URI;
const app = express();

console.log(db);
MongoClient.connect(db, {useUnifiedTopology: true}, (err, client) => {
  if(err) return console.error(err);
  console.log('Connected to Database');
})

  app.use(express.static(path.resolve(__dirname, ".", "dist")));
  app.use(bodyParser.urlencoded({ extended: true }))

  app.post('/', (req, res) => {
    //
  })

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "dist", "index.html"));
  });

  app.listen(9000, function () {
    console.log('listening on port 9000');
  })






module.exports = app;