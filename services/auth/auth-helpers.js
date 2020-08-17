const bcrypt = require('bcryptjs');

const authHelpers = {

    comparePass: (userPassword, databasePassword) => {
    return bcrypt.compareSync(userPassword, databasePassword);
    },

    loginRedirect: (req, res, next) => {
    if (req.user) return res.redirect('user/user-profile');
    return next();
    },

    //^^this works don't touch it

    loginRequired: (req, res, next) => {
    if (!req.user) return res.redirect('auth/register');
    return next();
    }

};


module.exports = authHelpers;