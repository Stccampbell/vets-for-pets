\connect vets_for_pets

CREATE TABLE spay_neuter (
    id SERIAL PRIMARY KEY,
    organization VARCHAR,
    spay BOOLEAN,
    neuter BOOLEAN,
    phone VARCHAR,
    address TEXT,
    url VARCHAR
);

ALTER TABLE users ADD COLUMN spay_neuter_id INTEGER REFERENCES spay_neuter(id);