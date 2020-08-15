\connect vets_for_pets

CREATE TABLE vets (
    id SERIAL PRIMARY KEY,
    organization VARCHAR,
    address TEXT,
    phone VARCHAR,
    url VARCHAR
);

ALTER TABLE users ADD COLUMN vet_id INTEGER REFERENCES vets(id);