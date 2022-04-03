BEGIN;

DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(100),
  quantity INT,
  prev_price INT NOT NULL,
  new_price INT NOT NULL
);

COMMIT;
