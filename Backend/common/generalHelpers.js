const EventLikeModel = require("../models/EventLikeModel");
const userModel = require("../models/userModel");
const { sendEmail } = require("./sendEmail");

// const generateOtp = () => {
//   return Math.floor(Math.random() * 9999 + 1000);
// };

const createSeedAdmin = async () => {
  const admin = await userModel.findOne({ role: "Admin" });
  if (!admin) {
    userModel.create({
      name: "Aman",
      email: "admin@gmail.com",
      role: "Admin",
      password: "abc123",
      phoneNumber: 4852357472,
    });
    console.log("Admin Created");
  }
};

const createSeedEventLike = async (event) => {
  const currentEventId = await event?._id;
  const eventLike = await EventLikeModel.create({
    eventId: currentEventId,
    emails: [],
  });

  console.log(eventLike);
};

const sendEmailToAllSubscriber = (userEmail, message) => {
  userEmail.forEach((email) => {
    sendEmail(email);
  });
};

module.exports = {
  // generateOtp,
  createSeedAdmin,
  createSeedEventLike,
  sendEmailToAllSubscriber,
};
