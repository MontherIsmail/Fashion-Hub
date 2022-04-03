const { selectProducts } = require('../database/queries');

const getAllProducts = (req, res, next) => {
  selectProducts()
    .then((data) => res.status(200).json(data.rows))
    .catch((error) => {
      next(error);
    });
};

module.exports = getAllProducts;
