/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { addProductSchema } = require('../validation');
const { addProductDB } = require('../database/queries');
const { customError } = require('../errors');

const addProduct = (req, res, next) => {
  const {
    // eslint-disable-next-line camelcase
    name,
    category,
    prev_price,
    new_price,
    quantity,
    product_image,
  } = req.body;
  addProductSchema
    .validateAsync(req.body)
    .then(() => addProductDB(
      name,
      category,
      prev_price,
      new_price,
      quantity,
      product_image,
    ))
    .then((data) => {
      res.json({
        status: 200,
        editedProduct: data.rows[0],
        message: 'product Added',
      });
    })
    .catch((err) => {
      if (err.details) {
        next(customError({ message: err.details[0].message, status: 409 }));
      } else {
        next(err);
      }
    });
};

module.exports = { addProduct };
