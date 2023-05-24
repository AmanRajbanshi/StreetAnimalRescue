const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
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
    comments: [
      {
        uuid: {
          type: String,
        },
        email: String,
        comment: String,
        isARelpyTo: String,
      },
    ],
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
