const asyncHandler = require("../middlewares/asyncHandler");
// const Event = require("../models/Event");
const EventLikeModel = require("../models/EventLikeModel");

const createALike = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const eventLike = await EventLikeModel.findOne({ eventId: id });

  const { email } = req.body;

  if (!eventLike?.eventId) {
    throw new Error("No Such Event");
  }

  const userEmail = req.body.email ?? "";

  if (eventLike?.emails.includes(userEmail)) {
    throw new Error("You have already liked this event");
  }

  const updatedEvent = await EventLikeModel.findOneAndUpdate(
    { eventId: id },
    { emails: [...eventLike?.emails, email] },
    { new: true }
  );

  res.json({ message: updatedEvent, status: "Error" });
});

const getALlEventLikes = asyncHandler(async (req, res) => {
  const response = await EventLikeModel.find();
  res.json({ success: true, message: response });
});

module.exports = { createALike, getALlEventLikes };
