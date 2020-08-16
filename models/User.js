const db = require('../db/config');
const { hash } = require('bcryptjs');
const usersController = require('../controllers/users-controller');

class User {
    constructor({ id, username, email, password_digest }) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password_digest = password_digest;
    }

    static findByUserName(username) {
        return db
            .oneOrNone('SELECT * FROM users WHERE username = $1', username)
            .then((user) => {
                if (user) return new this(user);
                if (!user) return err('User not found');
            });
            //     return user.map(() => {
            //         return new User({});
            //     });

            //     })
            
            
    }

    save() {
        return db
            .one(
                `INSERT INTO users
                (username, email, password_digest)
                VALUES ($/username/, $/email/, $/password_digest/)
                RETURNING *`,
                    this
            )
            .then((savedUser) => Object.assign(this, savedUser));
    }
}

module.exports = User;




// const db = require('../db/config');

// class User {
//     constructor({ id, username, email, password_digest }) {
//         this.id = id;
//         this.username = username;
//         this.email = email;
//         this.password_digest = password_digest;
//         // this.user_id = vets.user_id || null;
//     }

//     static findByUserName(username) {
//         return db.oneOrNone
//         ('SELECT * FROM users WHERE username = $1', username)
//         .then((user) => {
//             if (user) return new this(User);
//             else throw new Error('User not found');
//         });
//     }

//     save() {
//         return db.one(
//             `INSERT INTO users 
//             (username, email, password_digest)
//             VALUES (
//                 $/username/, $/email/, $/password_digest/)
//                 RETURNING *`,
//                 this
//             )
//             .then((savedUser) => Object.assign(this, savedUser));
        
//     }

//     findUserVets() {
//         return db
//             .manyOrNone(
//                 'SELECT * FROM vets WHERE user_id = $1', this.id)
//             .then((vets) => {
//                 return vets.map((vet) => new Vet(vet));
//             });
    
//     }
// }

// module.exports = User;
