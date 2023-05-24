const ReqToAdopt = require("../models/reqToAdopt");

module.exports.Post_ReqToAdopt = async (req, res) => {
  const newReqToAdopt = new ReqToAdopt(req.body);
  try {
    const insertReqToAdopt = await newReqToAdopt.save();
    res.status(201).json({ success: true, message: insertReqToAdopt });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.get_ReqToAdopt = async (req, res) => {
  try {
    const getReqToAdopt = await ReqToAdopt.find({});
    res.json({ success: true, message: getReqToAdopt });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getSingle_ReqToAdopt = async (req, res) => {
  try {
    const reqToAdopt = await ReqToAdopt.findById(req.params.id);
    res.status(200).json({
      success: true,
      reqToAdopt,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_ReqToAdopt = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateReqToAdopt = await ReqToAdopt.findByIdAndUpdate(
      { _id },
      req.body
    );
    res.json({ success: true, message: updateReqToAdopt });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.delete_ReqToAdopt = async (req, res) => {
  try {
    const _id = req.params.id;
    await ReqToAdopt.findByIdAndDelete({ _id });
    res.json({ success: true, message: {} });
  } catch (error) {
    res.status(500).json(error);
  }
};
