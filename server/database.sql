CREATE DATABASE perntodo;

CREATE TABLE todo(
  -- SERIAL increases the primary key with each new
  -- piece of data to ensure uniqueness.
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);