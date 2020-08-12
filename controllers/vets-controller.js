const Vet = require('../models/Vet');

const vetsController = {};

vetsController.create = (req, res) => {
    new Vet({
        name: req.body.name,
        location: req.body.location,
        phone: req.body.phone,
        website: req.body.website,            
        user_id: req.user.id,
    })
        .then((vet) => {
            res.redirect(`/vets/${vet.id}`);            
            })
            .catch(next);
    };



module.exports = vetsController;