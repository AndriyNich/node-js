const {
  registerSchema,
  loginSchema,
  subscriptionSchema,
  avatarUrlSchema,
} = require("./schemaJoi");
const User = require("./schemaDb");

module.exports = {
  User,
  registerSchema,
  loginSchema,
  subscriptionSchema,
  avatarUrlSchema,
};
