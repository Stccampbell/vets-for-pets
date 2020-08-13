const db = require('../db/config');

class User {
    constructor({ id, username, email, password_digest }) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.password_digest = user.password_digest;
        // this.user_id = vets.user_id || null;
    }

    static findByUserName(username) {
        return db.oneOrNone
        ('SELECT * FROM users WHERE username = $1', username)
        .then((user) => {
            if (user) return new this(user);
            else throw new Error('User not found');
        });
    }

    save() {
        return db.one(
            `INSERT INTO users 
            (username, email, password_digest)
            VALUES (
                $/username/, $/email/, $/password_digest/)
                RETURNING *`,
                this
            )
            .then((savedUser) => Object.assign(this, savedUser));
        
    }

    findUserVets() {
        return db
            .manyOrNone(
                'SELECT * FROM vets WHERE user_id = $1', this.id)
            .then((vets) => {
                return vets.map((vet) => new Vet(vet));
            });
    
    }
}

module.exports = User;
