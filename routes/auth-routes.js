const express = require('express');
const authRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const passport = require('../services/auth/local');

authRouter.get('/register', authHelpers.loginRequired, (req, res) => {
    res.render('auth/register');
})


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