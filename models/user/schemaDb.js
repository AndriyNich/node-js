const { Schema, model } = require("mongoose");

const { emailRegexp, subscriptionList } = require("../../constants");
const { handleMongooseError } = require("../../helpers");

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      reuired: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: subscriptionList[0],
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
