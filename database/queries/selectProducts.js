const connection = require('../config/connection');

const selectProducts = () => connection.query('SELECT * FROM products ORDER BY id');

module.exports = selectProducts;
