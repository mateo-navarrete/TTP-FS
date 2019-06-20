DROP DATABASE IF EXISTS ttpfs;
CREATE DATABASE ttpfs;

\c ttpfs;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE balance (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  total VARCHAR NOT NULL
);

INSERT INTO users ( user_name, email, password_digest ) VALUES ( 'demo', 'demo@demo.com', 'abc123' );

INSERT INTO balance ( user_id, total ) VALUES ( 1, '5000' );
