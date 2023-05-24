const UploadStreetAnimalInfo = require("../models/uploadStreetAnimalInfo");

module.exports.Post_UploadStreetAnimalInfo = async (req, res) => {
  const newUploadStreetAnimalInfo = new UploadStreetAnimalInfo(req.body);
  try {
    const insertUploadStreetAnimalInfo = await newUploadStreetAnimalInfo.save();
    res
      .status(201)
      .json({ success: true, message: insertUploadStreetAnimalInfo });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_UploadStreetAnimalInfo = async (req, res) => {
  try {
    const getUploadStreetAnimalInfo = await UploadStreetAnimalInfo.find({});
    res.json({ success: true, message: getUploadStreetAnimalInfo });
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_UploadStreetAnimalInfo = async (req, res) => {
  try {
    const uploadStreetAnimalInfo = await UploadStreetAnimalInfo.findById(
      req.params.id
    );
    res.status(200).json({
      success: true,
      uploadStreetAnimalInfo,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_UploadStreetAnimalInfo = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUploadStreetAnimalInfo =
      await UploadStreetAnimalInfo.findByIdAndUpdate({ _id }, req.body);
    res.json({ success: true, message: updateUploadStreetAnimalInfo });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_UploadStreetAnimalInfo = async (req, res) => {
  try {
    const _id = req.params.id;

    await UploadStreetAnimalInfo.findByIdAndDelete({ _id });
    res.json({ success: true, message: {} });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
