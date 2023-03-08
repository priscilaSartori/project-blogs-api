const Joi = require('joi');

const passwordShema = Joi.string().min(6).required();
const emailShema = Joi.string().email().required();
const displayNameShema = Joi.string().min(8).required();

module.exports = {
  passwordShema,
  emailShema,
  displayNameShema,
};