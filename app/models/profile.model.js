const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    ageRange: String,
    occupation: String,
    interests: String,
    description: String
})

module.exports = mongoose.model('Profile', profileSchema);