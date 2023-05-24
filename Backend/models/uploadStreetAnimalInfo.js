const { Schema, model } = require("mongoose");

const uploadStreetAnimalInfoSchema = new Schema({
  name: {
    type: String,
    required: [true, "username is required"],
  },
  image: {
    type: String,
    required: [true, "Image of Street Animal is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true,
  },
  phNumber: {
    type: Number,
    required: [true, "Phone Number is required"],
  },
});

module.exports = model("UploadStreetAnimalInfo", uploadStreetAnimalInfoSchema);
