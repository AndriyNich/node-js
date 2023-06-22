const path = require("path");
const fs = require("fs/promises");

const { HttpError, resizeImg } = require("../../helpers");
const { User } = require("../../models/user");
const { pathToFile } = require("../../constants");

const avatarsDir = path.join(
  __dirname,
  "../../",
  pathToFile.PUBLIC,
  pathToFile.AVATAR
);

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const resize = await resizeImg(tempUpload, 250, 250);

  const filename = `${_id}_${originalname}`;

  const resultUpload = path.join(avatarsDir, filename);
  console.log(`move ${tempUpload}`);
  console.log(req.file);
  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join(pathToFile.AVATAR, filename);

  const result = await User.findByIdAndUpdate(
    _id,
    { avatarURL },
    {
      new: true,
      select: "avatarURL",
    }
  );
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = updateAvatar;
