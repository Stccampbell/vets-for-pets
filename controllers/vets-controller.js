const Vet = require('../models/Vet');
const db = require('../db/config');

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

vetsController.index = (req, res) => {
    return vets.getAll()
    .then((vets) => {
        res.render('/vets/')
    })
}    



module.exports = vetsController;