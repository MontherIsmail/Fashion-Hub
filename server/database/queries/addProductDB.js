const connection = require('../config/connection');

// eslint-disable-next-line camelcase
const addProductDB = (name, category, prev_price, new_price, quantity) => connection.query('INSERT INTO products (name, category, prev_price,new_price, quantity) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, category, prev_price, new_price, quantity]);

module.exports = addProductDB;
