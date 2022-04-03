/* eslint-disable camelcase */
const connection = require('../config/connection');

module.exports = (id, {
  name, category, prev_price, new_price, quantity,
}) => connection.query(
  'UPDATE products SET name = $1, category = $2, quantity = $3, prev_price= $4, new_price= $5 WHERE id = $6 RETURNING *;',
  [name, category, prev_price, new_price, quantity, id],
);
