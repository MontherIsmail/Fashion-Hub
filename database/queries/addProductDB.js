const connection = require('../config/connection');

// eslint-disable-next-line camelcase
const addProductDB = (name, category, prev_price, new_price, quantity, product_image) => connection.query('INSERT INTO products (name, category, prev_price,new_price, quantity, product_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, category, prev_price, new_price, quantity, product_image]);

module.exports = addProductDB;
