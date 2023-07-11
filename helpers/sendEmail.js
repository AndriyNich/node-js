const sgmail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgmail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "info@bembi.ua" };
  await sgmail.send(email);
  return true;
};

module.exports = sendEmail;
