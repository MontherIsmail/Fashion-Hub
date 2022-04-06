const router = require('express').Router();
const { pageNotFoundError, serverError } = require('../errors');
const {
  addProduct,
  getAllProducts,
  removeProduct,
  updateProductHandler,
  getOneProduct,
} = require('../controllers');

router.route('/products').get(getAllProducts).post(addProduct);
router
  .route('/products/:id')
  .delete(removeProduct)
  .patch(updateProductHandler)
  .get(getOneProduct);
router.use(pageNotFoundError);
router.use(serverError);
module.exports = router;
