const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name: String,
    ageRange: String,
    occupation: String,
    interests: String,
    description: String
})

module.exports = mongoose.model('Profile', profileSchema);