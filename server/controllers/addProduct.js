/* eslint-disable no-unused-vars */
const { addProductSchema } = require('../validation');
const { addProductDB } = require('../database/queries');
const { customError } = require('../errors');

const addProduct = (req, res, next) => {
  const {
    // eslint-disable-next-line camelcase
    name, category, prev_price, new_price,
  } = req.body;
  addProductSchema
    .validateAsync(req.body)
    .then((data) => addProductDB(name, category, prev_price, new_price))
    .then((data) => res.json({ message: 'product Added' }))
    .catch((err) => {
      console.log(err);
      // if (err.details) {
      //   next(customError('Something Wrong', 409));
      // } else {
      //   next(err);
      // }
    });
};

module.exports = { addProduct };
