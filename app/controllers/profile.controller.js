const Profile = require('../models/profile.model.js');

// POST a profile
exports.create = (req, res) => {
    // create a profile
    const profile = new Profile({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        ageRange: req.body.ageRange,
        occupation: req.body.occupation,
        interests: req.body.interests,
        description: req.body.description
    });

    // save profile to the database
    profile.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// FETCH all profiles
exports.findAll = (req, res) => {
    Profile.find()
    .then(profiles => {
        res.send(profiles);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}

// DELETE a profile
exports.delete = (req, res) => {
    Profile.findByIdAndRemove(req.params.profileId)
    .then(profile => {
        if(!profile) {
            return res.status(404).send({
                message: "Profile not found with id " + req.params.profileId
            });
        }
        res.send({message: "Profile deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Profile not found with id " + req.params.profileId
            });                
        }
        return res.status(500).send({
            message: "Could not delete profile with id " + req.params.profileId
        });
    });
};