const { Schema, model } = require("mongoose");

const upcomingEventSchema = new Schema(
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

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("UpcomingEvent", upcomingEventSchema);
