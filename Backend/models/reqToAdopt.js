const mongoose = require("mongoose");
const reqToAdoptSchema = new mongoose.Schema({
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
  location: {
    type: String,
    required: [true, "location is required"],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, "add amount for donation"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "How many animal do you want to adopt?"],
    trim: true,
  },
  suggestion: {
    type: String,
    required: [true, "Anything to suggest?"],
    trim: true,
  },
});

module.exports = mongoose.model("RequestToAdopt", reqToAdoptSchema);
