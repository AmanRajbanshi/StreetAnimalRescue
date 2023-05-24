const mongoose = require("mongoose");
const userSubscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
});

module.exports = mongoose.model("UserSubscribe", userSubscribeSchema);
