const Joi = require("joi");

const { emailRegexp } = require("../../helpers");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

module.exports = {
  contactSchema,
  favoriteSchema,
};
