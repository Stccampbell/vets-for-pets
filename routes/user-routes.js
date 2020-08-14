const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');

const authHelpers = require('../services/auth/auth-helpers');


userRouter.get('/login', authHelpers.loginRequired, (req, res) => {
    res.render('auth/login');
});

userRouter.get('/')
// userRouter.post('/new', usersController.create);
userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register')
    .then (userRouter.post('user', usersController.create()))});
// userRouter.post('/new', usersController.create), 
// userRouter.post('/make-profile', usersController.(req, res) => {
//      res.render('user/add-vet-info');
// });

userRouter.get('/auth', authHelpers.loginRequired, usersController.index);



module.exports = userRouter