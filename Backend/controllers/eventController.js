// const {
//   ADMIN_ROLE,
//   FIELD_ONLY_UPDATEABLE_BY_ADMIN_EVENTS,
// } = require("../common/Constants");
//const { createSeedEventLike } = require("../common/generalHelpers");
const { createSeedEventLike } = require("../common/generalHelpers");
const asyncHandler = require("../middlewares/asyncHandler");
const Event = require("../models/Event");
let crypto = require("crypto");

const createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create({
    ...req.body,
    comments: [],
  });

  if (event) {
    createSeedEventLike(event);
  }

  res.json({ message: event, status: "success" });
});
const getEvents = async (req, res) => {
  try {
    const getEvent = await Event.find({});

    res.json({ success: true, message: getEvent });
  } catch (error) {
    res.status(400).json(error);
  }
};
const getSingleEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: event,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const currentEvent = await Event.findById({ _id: id });

  let { comment } = req.body;

  comment = comment;

  const updatedEvent = await Event.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
      comments: comment
        ? [...currentEvent?.comments, { ...comment, uuid: crypto.randomUUID() }]
        : [...currentEvent?.comments],
    },
    { new: true, runValidators: true }
  );

  res.json({ message: updatedEvent, success: true });
});

const deleteEvent = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteEvent = await Event.findByIdAndDelete({ _id });
    res.json({ success: true, deleteEvent });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  getSingleEvent,
};
