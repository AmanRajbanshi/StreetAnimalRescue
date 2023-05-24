const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "contact is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, "subject is required"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "message is required"],
    trim: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
