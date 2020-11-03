const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const db = process.env.MONGO_DB_URI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
    .once('open', () => console.log('Connected to database'))
    .on('error', (error) => {
        console.log("Error", error);
    });