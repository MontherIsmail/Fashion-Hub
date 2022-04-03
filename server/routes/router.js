const router = require('express').Router();
const { join } = require('path');

const {
  addProduct,
  getAllProducts,
  removeProduct,
  updateProductHandler,
  getOneProduct,
} = require('../controllers');

router.route('/products').get(getAllProducts).post(addProduct);
router.route('/products/:id').delete(removeProduct).patch(updateProductHandler).get(getOneProduct);
router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

module.exports = router;
