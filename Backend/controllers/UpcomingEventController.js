const UpcomingEvent = require("../models/UpcomingEventModel");

module.exports.Post_UpcomingEvent = async (req, res) => {
  const newUpcomingEvent = new UpcomingEvent(req.body);
  try {
    const insertUpcomingEvent = await newUpcomingEvent.save();
    res.status(201).json({ success: true, insertUpcomingEvent });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_UpcomingEvent = async (req, res) => {
  try {
    const getUpcomingEvent = await UpcomingEvent.find({});
    res.json({ success: true, getUpcomingEvent });
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_UpcomingEvent = async (req, res) => {
  try {
    const upcomingEvent = await UpcomingEvent.findById(req.params.id);
    res.status(200).json({
      success: true,
      upcomingEvent,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_UpcomingEvent = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUpcomingEvent = await UpcomingEvent.findByIdAndUpdate(
      { _id },
      req.body
    );
    res.json({ success: true, updateUpcomingEvent });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_UpcomingEvent = async (req, res) => {
  try {
    const _id = req.params.id;
    await UpcomingEvent.findByIdAndDelete({ _id });
    res.json({ success: true, message: {} });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
