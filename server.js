const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost: 4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// configure the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

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
const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})