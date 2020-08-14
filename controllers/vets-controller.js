const Vet = require('../models/Vet');


const vetsController = {};

vetsController.create = (req, res, next) => {
    new Vet({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,
        url: req.body.url,            
        user_id: req.user.id,
    })
        .save()
        .then((savedVet) => {
            res.redirect(`/vets/${savedVet.id}`);            
            })
            .catch(next);
    };

vetsController.index = (req, res) => {
    vets.getAll(req.params.name)
    .then((vets) => {
        res.render('/vets/', {
            data: { vets },
        })
    })
};    



module.exports = vetsController;