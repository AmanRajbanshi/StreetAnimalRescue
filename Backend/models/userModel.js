const { Schema, model } = require("mongoose");
const { USER_ROLE } = require("../common/constants");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },

  role: {
    type: String,
    default: USER_ROLE,
  },
});

module.exports = model("UserModel", userSchema);
