const sgmail = require("@sendgrid/mail");
require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;
const SENDGRID_API_KEY =
  "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";
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
