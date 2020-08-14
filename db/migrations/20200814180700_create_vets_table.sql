\connect vets_for_pets

CREATE TABLE vets (
    id SERIAL PRIMARY KEY,
    oganization VARCHAR,
    address TEXT,
    phone VARCHAR(10),
    url VARCHAR
);

ALTER TABLE users