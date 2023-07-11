const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;

  console.log(verificationToken);

  const user = await User.findOne({ verificationToken });
  console.log(user);
  if (!user) {
    throw HttpError(401, "Email not found");
  }

  console.log(user._id);

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.send({
    message: "Email verify success",
  });
};

module.exports = verifyEmail;
