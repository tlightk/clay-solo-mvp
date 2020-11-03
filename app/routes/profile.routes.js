module.exports = function(app) {
    const profile = require('../controllers/profile.controller.js');

    //create a new profile
    app.post('/api/profile', profile.create);

    //retrieve all profiles
    app.get('/api/profiles', profile.findAll);

    //delete a profile
    app.delete('api/profile/:profileId', profile.delete);
}


// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');

// const Profile = require('../models/profile');

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'Handling GET requests to /profile'
//     });
// });

// router.post('/', (req, res, next) => {
//     const profile = new Profile({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         ageRange: req.body.ageRange,
//         occupation: req.body.occupation,
//         interests: req.body.interests,
//         description: req.body.description
//     });
//     profile
//         .save()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 message: 'Handling POST requests to /profile',
//                 createdProfile: result
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             })
//         });
    
// })