const { Schema, model } = require("mongoose");

const eventLikeSchema = new Schema({
  eventId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  emails: [String],
});

module.exports = model("EventLike", eventLikeSchema);
