const router = require("express").Router();
// const { ALL_ROLES } = require("../common/Constants");
const Donation = require("../controllers/donationController");
// const { authMiddleware } = require("../middlewares/authMiddleware");
// const verifyRoles = require("../middlewares/roleMiddleware");

router.post(
  "/donate",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  Donation.Post_Donation
);
router.get("/donate", Donation.get_Donation);
//router.get("/donate/:id", Donation.getSingle_Donation);
router.put("/donate/:id", Donation.update_Donation);
router.delete("/donate/:id", Donation.delete_Donation);

module.exports = router;
