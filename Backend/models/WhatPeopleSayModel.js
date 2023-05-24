const mongoose = require("mongoose");
const WhatPeopleSaySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "image is required"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WhatPeopleSay", WhatPeopleSaySchema);
