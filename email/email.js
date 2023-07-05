const sgmail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgmail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "bs.bembi@gmail.com",
  from: "info@bembi.ua",
  subject: "test email",
  html: "<p><strong>Test email</strong> from localhost:3000</p>",
};

sgmail
  .send(email)
  .then(() => {
    console.log("Email send success");
  })
  .catch((error) => {
    console.log(error.message);
  });
