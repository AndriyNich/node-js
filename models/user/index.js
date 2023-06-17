const User = require("./schemaDb");
const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
} = require("./schemaJoi");

module.exports = {
  User,
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
