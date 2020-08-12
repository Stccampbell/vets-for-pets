const bcrypt = require('bcryptjs');

const authHelpers = {

    comparePass = (userPassword, databasePassword) => {
    return bcrypt.compareSync(userPassword, databasePassword);
    },

    loginRedirect = (req, res, next) => {
    if (req.user) return res.redirect('/user');
    return next();
    },

    loginRequired = (req, res, next) => {
    if (!req.user) return res.direct('/auth/login');
    return next();
    }

};


module.exports = authHelpers;