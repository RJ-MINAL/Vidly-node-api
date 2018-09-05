const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    isGold: { type: Boolean, default: false },
    name: { type: String, required: true, min: 5, max: 50 },
    phone: { type: String, required: true, min: 5, max: 50 }
  })
);

function validateCustomer(customer) {
  return Joi.validate(customer, {
    isGold: Joi.boolean(),
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(50)
      .required()
  });
}

exports.Customer = Customer;
exports.validate = validateCustomer;
