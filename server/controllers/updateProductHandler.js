const { updateProduct } = require('../database/queries');
const { customError } = require('../errors');

module.exports = (req, res, next) => {
  const { id } = req.params;
  updateProduct(id, req.body)
    .then((data) => {
      res.json({ status: 200, editedProduct: data.rows[0], message: 'product Updated' });
    })
    .catch((err) => {
      if (err.code) next(customError({ status: 400 }));
      else next(err);
    });
};
