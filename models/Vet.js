const db = require('../db/config');



class Vet {
    constructor(vet) {
        this.id = vet.id || null;
        this.name = vet.name;
        this.address = vet.address;
        this.phone = vet.phone;
        this.url = vet.url;
        this.user_id = vet.user_id;
    }

    static getAll() {
         return db
         .manyOrNone('SELECT * FROM vets')
         .then((vets) => {
             return vets.map((vet) => {
                 return new this(vet);
             });
         });
    }

     static getById(id) {
         return db
         .oneOrNone('SELECT * FROM vets WHERE id = $1', id)
         .then((vet) => {
             if (vet) return new this (vet);
         });
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