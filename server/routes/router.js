const router = require('express').Router();
const { join } = require('path');

const {
  addProduct,
  getAllProducts,
  removeProduct,
  updateProductHandler,
} = require('../controllers');

router.post('/add', addProduct);
router.get('/products', getAllProducts);
router.route('/products/:id').delete(removeProduct).patch(updateProductHandler);
router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});

module.exports = router;
