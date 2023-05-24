const WhatPeopleSay = require("../models/WhatPeopleSayModel");

module.exports.Post_WhatPeopleSay = async (req, res) => {
  const newWhatPeopleSay = new WhatPeopleSay(req.body);
  try {
    const insertWhatPeopleSay = await newWhatPeopleSay.save();
    res.status(201).json({ success: true, message: insertWhatPeopleSay });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_WhatPeopleSay = async (req, res) => {
  try {
    const getWhatPeopleSay = await WhatPeopleSay.find({});
    res.json({ success: true, message: getWhatPeopleSay });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getSingle_WhatPeopleSay = async (req, res) => {
  try {
    const whatPeopleSay = await WhatPeopleSay.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: whatPeopleSay,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_WhatPeopleSay = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateWhatPeopleSay = await WhatPeopleSay.findByIdAndUpdate(
      { _id },
      req.body
    );
    res.json({ success: true, message: updateWhatPeopleSay });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_WhatPeopleSay = async (req, res) => {
  try {
    const _id = req.params.id;
    await WhatPeopleSay.findByIdAndDelete({ _id });
    res.json({ success: true, message: {} });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
