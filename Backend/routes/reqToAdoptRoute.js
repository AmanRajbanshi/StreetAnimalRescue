const router = require("express").Router();
//const { ALL_ROLES } = require("../common/Constants");
const ReqToAdopt = require("../controllers/reqToAdoptController");
// const { authMiddleware } = require("../middlewares/authMiddleware");
// const verifyRoles = require("../middlewares/roleMiddleware");

router.post(
  "/adopt",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  ReqToAdopt.Post_ReqToAdopt
);
router.get(
  "/adopt",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  ReqToAdopt.get_ReqToAdopt
);
router.get(
  "/adopt/:id",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  ReqToAdopt.getSingle_ReqToAdopt
);
router.patch(
  "/adopt/:id",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  ReqToAdopt.update_ReqToAdopt
);
router.delete(
  "/adopt/:id",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  ReqToAdopt.delete_ReqToAdopt
);

module.exports = router;
