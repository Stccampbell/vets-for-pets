const userController = {
    index(req, res) {
        res.json({
            message: 'put a user profile page on this route',
            data: {
                user: req.user,
            },
        });
    },

    create(req, res, next) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);

        new User({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
            .save()
            .then((user) => {
                req.login(user, (err) => {
                    if (err) return next(err);
                    res.redirect('/user');
                });
            })
            .catch(next);
    },
};

module.exports = userController;












// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
// const Vet = require('../models/Vet');
// const { render } = require('ejs');

// const usersController = { 

//     index(req, res) {
//         req.user
//         .then((user) => {
//             res.render('/user/vet-profile')
//             return user[{ data: req.user  }];
            
//         })
//     //     req.user
//     //     .findUserVets()
//     //     .then((Vet) => {
//     //         req.Vet(getByUserId($/user-id/),  => {  res.render('/user/profile');
//     //         return { vets }
            
//     //         });
//     //     })
//     //     .catch(next);    
//     // },

//     },

//     create(req, res, next) {
//         const salt = bcrypt.genSaltSync();
//         const hash = bcrypt.hashSync(req.body.password, salt);
//         new User({
//             username: req.body.username,
//             email: req.body.email,
//             password_digest: hash,
//         })   
//             .save()
//             .then((user) => {
//                 req.login(user, (err) => {
//                     if (err) return next(err);
//                     res.redirect('user/vet-profile');
//                 });
//             })
//             .catch(next);
//     },

// };

// module.exports = usersController;