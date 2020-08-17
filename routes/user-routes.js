const express = require('express');
const userRouter = express.Router();

const usersController = require('../controllers/users-controller');

const authHelpers = require('../services/auth/auth-helpers');

const passport = require('../services/auth/local');


// userRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
//     res.render('/user-profile');
// });
userRouter.get('/user-profile', usersController.index, (req, res) => {
    res.render('user/user-profile')}
);
        //this works dont toucch it!///^^^^

userRouter.post('/login', 
    passport.authenticate('local', {
        successRedirect: '/user/user-profile',
        failureRedirect: '/auth/register',
        failureFlash: true,
    })
);
//  this works down touch it!!!^^^^^



userRouter.get('/new', authHelpers.loginRedirect, (req, res) => {
   res.render('auth/register')})
userRouter.post('auth/register', usersController.create);    

userRouter.get('/', authHelpers.loginRedirect, (req, res) => {
    res.render('user/make-profile')})
//userRouter.post('/')
    

    
userRouter.get('/auth', authHelpers.loginRequired, usersController.index);

userRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('back');
});



module.exports = userRouter;