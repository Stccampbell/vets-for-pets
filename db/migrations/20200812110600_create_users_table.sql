\connect vets_for_pets


CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    password_digest TEXT
);

