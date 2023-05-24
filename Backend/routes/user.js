const { ADMIN_ROLE } = require("../common/constants");
// const { generateOtp } = require("../common/generalHelpers");
const {
  registerUser,
  loginUser,
  findAUser,
  get_AllUser,
  delete_User,
  sendEmailToAllUsers,
} = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const verifyRoles = require("../middlewares/roleMiddleware");

const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/email").post(sendEmailToAllUsers);
router.route("/login").post(loginUser);
router.route("/getUser").get(findAUser);
router.route("/all-user").get(get_AllUser);
router.route("/all-user/:id").delete(delete_User);

router
  .route("/all")
  .get(authMiddleware, verifyRoles([ADMIN_ROLE]), (req, res) => {
    res.send("jkdfkdjhjk");
  });
module.exports = router;
