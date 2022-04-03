const router = require('express').Router();
const { join } = require('path');

const { addProduct } = require('../controllers');

router.post('/add', addProduct);

router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'public'));
});

module.exports = router;
