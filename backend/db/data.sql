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


INSERT INTO users ( user_name, email, password_digest ) VALUES ( 'demo', 'demo@demo.com', 'abc123' );
