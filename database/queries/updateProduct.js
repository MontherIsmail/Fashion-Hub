/* eslint-disable camelcase */
const connection = require('../config/connection');

module.exports = (id, {
  name, category, prev_price, new_price, quantity, product_image,
}) => connection.query(
  'UPDATE products SET name = $1, category = $2, quantity = $3, prev_price= $4, new_price= $5, product_image = $6 WHERE id = $7 RETURNING *;',
  [name, category, prev_price, new_price, quantity, product_image, id],
);
