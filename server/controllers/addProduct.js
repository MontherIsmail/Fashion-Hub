const { addProductSchema } = require('../validation');

const addProduct = (req) => {
  addProductSchema
    .validateAsync(req.body)
    .then();
};

module.exports = { addProduct };
