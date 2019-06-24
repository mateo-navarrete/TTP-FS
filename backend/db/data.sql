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

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  stock_symbol VARCHAR NOT NULL,
  sale_price VARCHAR NOT NULL,
  quantity INT NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users ( user_name, email, password_digest ) VALUES ( 'demo', 'demo@demo.com', '$2a$10$tjLyzCI2muTGEjhh9n9Z.e5/Kj9ZhczYWFKmgfvCakMSMuJIcwDSC' );

INSERT INTO balance ( user_id, total ) VALUES ( 1, '5000' );

-- INSERT INTO transactions ( user_id, stock_symbol, sale_price, quantity ) VALUES ( 1, 'AAPL', '197.22', 3 ), ( 1, 'AAPL', '180.50', 2 ), ( 1, 'GOOGL', '1000', 1 ), ( 1, 'AMZN', '1800.25', 2 );
