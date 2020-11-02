const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, ".", "dist")));

app.get("/api", (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
  });

app.listen(9000, function () {
    console.log('listening on port 9000');
})

module.exports = app;