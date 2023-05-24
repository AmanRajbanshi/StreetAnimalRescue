const mongoose = require("mongoose");
const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email  is required"],
    trim: true,
  },
  phNumber: {
    type: Number,
    required: [true, "phone number is required"],
    trim: true,
  },
  userAddress: {
    type: String,
    required: [true, "user address is required"],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, "add amount for donation"],
    trim: true,
  },

  suggestion: {
    type: String,
    required: [true, "Anything to suggest?"],
    trim: true,
  },
});

module.exports = mongoose.model("Donation", donationSchema);
