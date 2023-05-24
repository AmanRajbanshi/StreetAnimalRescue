const Donation = require("../models/donationModel");

module.exports.Post_Donation = async (req, res) => {
  const newDonation = new Donation(req.body);
  try {
    const insertDonation = await newDonation.save();
    res.status(201).json(insertDonation);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.get_Donation = async (req, res) => {
  try {
    const getDonation = await Donation.find({});

    let array = [];
    await getDonation.map((donation) => {
      return array.push(donation.amount);
    });
    const initialAmount = 0;
    const totalDonation = array.reduce(
      (accumulator, currentAmount) => accumulator + currentAmount,
      initialAmount
    );

    let DonarsCount = getDonation.length;

    res.json({
      success: true,
      totalAmount: totalDonation,
      DonatedBy: DonarsCount,
      getDonation,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getSingle_Donation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    res.status(200).json({
      success: true,
      donation,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_Donation = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateDonation = await Donation.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ success: true, message: updateDonation });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

module.exports.delete_Donation = async (req, res) => {
  try {
    const _id = req.params.id;
    await Donation.findByIdAndDelete({ _id });
    res.json({ success: true, message: {} });
  } catch (error) {
    res.status(500).json(error);
  }
};
