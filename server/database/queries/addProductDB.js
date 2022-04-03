const connection = require('../config/connection');

// eslint-disable-next-line camelcase
const addProductDB = (name, category, prev_price, new_price) => connection.query('INSERT INTO products (name, category, prev_price,new_price) VALUES ($1, $2, $3, $4) RETURNING *', [name, category, prev_price, new_price]);

module.exports = addProductDB;
