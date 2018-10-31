const Joi = require('joi');
const mongoose = require('mongoose');

const Genre = mongoose.model(
  'Genre',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 5,
      max: 50
    }
  })
);

function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(genre, schema);
}

function validatePatient(genre) {
  const schema = {
    id: Joi.number().integer(),
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    last_name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(20)
      .required(),
    dpi: Joi.string()
      .length(13)
      .required(),
    address: Joi.string()
      .min(5)
      .max(100)
      .required(),
    email: Joi.string()
      .email()
      .min(5)
      .max(50)
      .required(),
    age: Joi.number()
      .integer()
      .min(1)
      .max(120)
      .required(),
    incription_date: Joi.string()
      .length(10)
      .required(),
    id_clinic: Joi.number()
      .min(1)
      .required(),
    id_ocupation: Joi.number()
      .min(1)
      .required(),
    id_avatar: Joi.number()
      .min(1)
      .required(),
    id_country: Joi.number()
      .min(1)
      .required(),
    active: Joi.boolean().default(1)
  };

  return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;
