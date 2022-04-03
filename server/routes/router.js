const router = require('express').Router();
const { join } = require('path');

router.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'public'));
});

module.exports = router;
