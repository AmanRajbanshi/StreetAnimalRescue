const { sendEmailToAllSubscriber } = require("../common/generalHelpers");
const asyncHandler = require("../middlewares/asyncHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { ADMIN_ROLE } = require("../common/constants");
const userSubscribeModel = require("../models/userSubscribeModel");

const registerUser = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (user) {
    throw new Error("User already registered");
  }
  let salt = await bcrypt.genSalt(12);
  let hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = await userModel.create({
    ...req.body,
    password: hashedPassword,
  });
  res.status(201).json({ message: newUser, success: true });
});

const get_AllUser = asyncHandler(async (req, res) => {
  try {
    const getuserModel = await userModel.find({});
    res.json({ success: true, message: getuserModel });
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
});

const delete_User = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete({ _id });
    res.json(deleteUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const loginUser = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    throw new Error("User not found");
  }
  let validPassword = false;
  if (user.role === ADMIN_ROLE) {
    validPassword = req.body.password === user.password;
  } else {
    validPassword = await bcrypt.compare(req.body.password, user.password);
  }
  if (!validPassword) {
    throw new Error("Password did not match");
  }
  const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1hr",
  });
  const validUser = {
    email: user.email,
    password: user.password,
    token: token,
    role: user?.role,
  };
  res.json({ success: false, message: validUser });
});
const findAUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.json({ message: "No Email", status: "Error" });
  }
  const user = await userModel.findOne({ email });
  res.json({ message: user, status: "Success" });
});

const sendEmailToAllUsers = asyncHandler(async (req, res) => {
  const { message } = req.body;
  const users = await userSubscribeModel.find({});
  sendEmailToAllSubscriber(
    users.map((user) => user?.email),
    message
  );

  if (users) {
    res.json({ success: true, message: "Email sent successfully" });
  }
});

module.exports = {
  registerUser,
  get_AllUser,
  delete_User,
  loginUser,
  findAUser,
  sendEmailToAllUsers,
};
