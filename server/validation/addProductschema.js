const joi = require('joi');

const addProductSchema = joi.object({
  name: joi.string().required(),
  category: joi.string().required(),
  quantity: joi.number().required().max(30),
  prev_price: joi.number().min(1).max(1000).required(),
  new_price: joi.number().min(1).max(1000).required(),
  product_image: joi.string().required(),
});

module.exports = { addProductSchema };
