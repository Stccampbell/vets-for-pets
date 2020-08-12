const db = require('../db/config');



class Vet {
    constructor({ })


save() => {
    return db.one(
        `INSERT INTO vets
        (key, key, key, key, key, user_id)
        VALUES ($/key/, $/key/, $/key/, $/key/, $/key/, $/user_id/) 
        RETURNING *`, 
        this
    ).then(savedVet => Object.assign(this, savedVet));
    
}

}
module.exports = Vet;