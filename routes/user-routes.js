const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');

const authHelpers = require('../services/auth/auth-helpers');


userRouter.get('/login', authHelpers.loginRequired, (req, res) => {
    res.render('auth/login');
})

userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register');
});

userRouter.post('/', usersController.create);

userRouter.get('/auth', authHelpers.loginRequired, usersController.index);



module.exports = userRouter;