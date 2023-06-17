const Joi = require("joi");

const { emailRegexp, subscriptionList } = require("../../helpers");

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionList),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscriptionList),
});

module.exports = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
