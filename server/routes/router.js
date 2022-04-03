const router = require('express').Router();
const { join } = require('path');

const { addProduct, getAllProducts } = require('../controllers');

router.post('/add', addProduct);
router.get('/products', getAllProducts);
router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'public'));
});

module.exports = router;
