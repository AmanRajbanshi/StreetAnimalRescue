const UserSubscribe = require("../models/userSubscribeModel");

module.exports.Post_UserSubscribe = async (req, res) => {
  const newUserSubscribe = new UserSubscribe(req.body);
  try {
    const insertUserSubscribe = await newUserSubscribe.save();
    res.status(201).json({ success: true, message: insertUserSubscribe });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.get_UserSubscribe = async (req, res) => {
  try {
    const getUserSubscribe = await UserSubscribe.find({});
    res.json({ success: true, message: getUserSubscribe });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getSingle_UserSubscribe = async (req, res) => {
  try {
    const userSubscribe = await UserSubscribe.findById(req.params.id);
    res.status(200).json({
      success: true,
      userSubscribe,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_UserSubscribe = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUserSubscribe = await UserSubscribe.findByIdAndUpdate(
      { _id },
      req.body
    );
    res.json({ success: true, message: updateUserSubscribe });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.delete_UserSubscribe = async (req, res) => {
  try {
    const _id = req.params.id;
    await UserSubscribe.findByIdAndDelete({ _id });
    res.json({ success: true, message: {} });
  } catch (error) {
    res.status(500).json(error);
  }
};
