const { selectProducts } = require('../database/queries');

const getAllProducts = (req, res, next) => {
  selectProducts()
    .then((data) => {
      if (!data.rowCount) {
        res.status(203).json({ message: 'No Products Found', status: 203 });
      } else res.status(200).json(data.rows);
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = getAllProducts;
