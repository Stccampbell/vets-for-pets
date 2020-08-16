const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');

const authHelpers = require('../services/auth/auth-helpers');

const passport = require('../services/auth/local');


// userRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
//     res.render('/user-profile');
// });
userRouter.get('/user-profile', usersController.show);

userRouter.post('/login', 
    passport.authenticate('local', {
        successRedirect: '/user-profile',
        failureRedirect: '/auth/register',
        failureFlash: true,
    })
);



userRouter.get('auth/register', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/register')})
userRouter.post('/', usersController.create);    

userRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
    res.render('user/make-profile')})
// userRouter.post('/')
    

    
// userRouter.get('/auth', authHelpers.loginRequired, usersController.index);

userRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('back');
});



module.exports = userRouter;