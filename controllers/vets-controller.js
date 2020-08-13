const Vet = require('../models/Vet');
const db = require('../db/config');

const vetsController = {};

vetsController.create = (req, res, next) => {
    new Vet({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        url: req.body.url,            
        user_id: req.user.id,
    })
        .then((vet) => {
            res.redirect(`/vets/${vet.id}`);            
            })
            .catch(next);
    };

vetsController.index = (req, res) => {
    return Vet.getAll()
    .then(() => {
        res.render('/vets/')
    })
};    



module.exports = vetsController;