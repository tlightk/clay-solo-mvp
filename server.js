const express = require("express");
const serveStatic = require("serve-static");
const app = express();
const path = require("path");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

const cors = require("cors");
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://namaewa-staging.herokuapp.com/"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(serveStatic(path.join(__dirname, 'dist')));

// configure the database
const dbConfig = require('./app/config/mongodb.config.js');
const db = process.env.MONGO_DB_URI;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(db)
    .then(() => {
        console.log("Successfully connected to MongoDB");
    }).catch(err => {
        console.log('Could not connect to MongoDB');
        process.exit();
    })

require('./app/routes/profile.routes.js')(app);

// create server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})