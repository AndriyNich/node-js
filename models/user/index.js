const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema,
} = require("./schemaJoi");
const User = require("./schemaDb");

module.exports = {
  User,
  registerSchema,
  loginSchema,
  subscriptionSchema,
  emailSchema,
};
