const { deleteProduct } = require('../database/queries');
const { customError } = require('../errors');

const removeProduct = (req, res, next) => {
  const { id } = req.params;
  deleteProduct(id)
    .then(({ rowCount }) => {
      if (!rowCount) throw customError(res.json({ message: 'id does not exist', status: 400 }));
    })
    .then(() => res.status(202).json({ msg: 'post Deleted Successfully' }))
    .catch((error) => next(error));
};

module.exports = removeProduct;
