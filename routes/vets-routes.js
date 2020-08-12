const express = require('express');
const vetsRouter = express.Router();

const vetsController = require('../controllers/vets-controller');


vetsRouter.get('/', vetsController.index);
vetsRouter.post('/', authHelpers.loginRequired, vetsController.create);

vetsRouter.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('vets-for-pets/vets-new');
});

vetsRouter.get('/:id', vetsController.show);

vetsRouter.get('/:id/edit', authHelpers.loginRequired, vetsController.edit);

vetsRouter.put('/:id', authHelpers.loginRequired, vetsController.update);
vetsRouter.delete('/:id', authHelpers.loginRequired, vetsController.delete);


module.exports = vetsRouter;