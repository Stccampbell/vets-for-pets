const db = require('../db/config');
const { index } = require('../controllers/vets-controller');
const User = require('./User');



class Vet {
    constructor(vet) {
        this.id = vet.id || null;
        this.name = vet.name;
        this.address = vet.address;
        this.phone = vet.phone;
        this.url = vet.url;
        this.user_id = vet.user(id);
    }

    static getAll() {
         return db
         .manyOrNone('SELECT * FROM vets ORDER BY name ABC')
        //  .then((vets) => {
        //      return vets.index((db.vets) => {
        //             return savedVet.getAll(this, vet)
        //      })
        //      });
        //  }
    }

    static getById(id) {
         return db
         .oneOrNone('SELECT * FROM vets WHERE id = $1', id)
         .then((vet) => {
             return vets.map((vet) => {
                 return new this(vet);
             });
            //  if (vet) return new this(vet);
         })
    }

    static getByUserId(user_id) {
        return db
        .manyOrNone(`SELECT * FROM vets WHERE user_id = user.user_id`, user_id)
        .then(() => {
            return Vet.getById(id);
        })
    }
    save() {
    return db.one(
        `INSERT INTO vets
        (name, address, phone, url, user_id)
        VALUES ($/name/, $/address/, $/phone/, $/url/, $/user_id/) 
        RETURNING *`, 
        this
        )
        .then(savedVet => Object.assign(this, savedVet));
    }
    
    update(changes) {
        Object.assign(this, changes);
        return db.oneOrNone(
            `UPDATE vets SET
                name = $/name/,
                address = $/address/,
                phone = $/phone/,
                url = $/url/,
                user_id = $/user_id/
            WHERE id = $/id/
            RETURNING *`, this)
            .then((vet) => {
                return Object.assign(this, vet);
            });
    }

    delete() {
        return db.oneOrNone('DELETE FROM vets WHERE id = $1', this.id);
    }
}


module.exports = Vet;