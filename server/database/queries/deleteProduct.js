const connection = require('../config/connection');

const deleteProduct = (id) => connection.query('DELETE FROM products WHERE id = $1', [id]);

module.exports = deleteProduct;
