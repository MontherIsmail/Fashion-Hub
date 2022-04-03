const joi = require('joi');

const addProductSchema = joi.object({
  name: joi.string().alphanum().required(),
  prev_price: joi.number().min(1).max(5).required(),
  new_price: joi.number().min(1).max(5).required(),
});

module.exports = { addProductSchema };
