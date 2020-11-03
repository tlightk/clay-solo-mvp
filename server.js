const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost: 4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// configure the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
const { db } = require("./app/models/profile.model.js");

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    }).catch(err => {
        console.log('Could not connect to MongoDB');
        process.exit();
    })

require('./app/routes/profile.routes.js')(app);

// create server
const server = app.listen(9000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})