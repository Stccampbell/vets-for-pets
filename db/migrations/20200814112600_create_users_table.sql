\connect vets_for_pets

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    password_digest TEXT
);
