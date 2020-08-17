const express = require('express');
const authRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const passport = require('../services/auth/local');
const usersController = require('../controllers/users-controller');

authRouter.get('/user/new', authHelpers.loginRequired, (req, res) => {
    res.render('auth/register');
});
authRouter.post('/register', usersController.create);

// authRouter.get('user/login', authHelpers.loginRedirect, (req, res) => {
//     res.render('user-profile')
// });
// authRouter.get('auth/login', authHelpers.loginRedirect, (req, res) => {
//     res.render('user/user-profile');
// });

// authRouter.post('auth/login', 
//     passport.authenticate('local', {
//         successRedirect: 'user/user-profile',
//         failureRedirect: 'auth/register',
//         failureFlash: true,
//     })
// );

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('back');
});

module.exports = authRouter;