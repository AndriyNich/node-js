const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  const hashPassword = await bcrypt.hash(password, 10);

  console.log(hashPassword);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  console.log(newUser);

  res.status(201).json({ email: newUser.email });
};

module.exports = register;
