const Jimp = require("jimp");

const HttpError = require("./HttpError");

const resizeImg = async (file, sizeX, sizeY) => {
  try {
    const result = await Jimp.read(file);
    await result.resize(sizeX, sizeY);
    await result.write(file);
  } catch (error) {
    console.log(error.message);
    throw HttpError(415, error.message);
  }
};

module.exports = resizeImg;
