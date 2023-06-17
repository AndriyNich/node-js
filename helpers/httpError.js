const { errorMessageList } = require("../constants");

const httpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = httpError;
