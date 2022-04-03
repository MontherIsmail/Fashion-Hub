const connection = require('../config/connection');

const selectProducts = () => connection.query('SELECT * FROM products');

module.exports = selectProducts;
