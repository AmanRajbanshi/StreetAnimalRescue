const router = require("express").Router();
// const { ALL_ROLES } = require("../common/constants");
const UploadStreetAnimalInfo = require("../controllers/uploadStreetAnimalInfoController");
// const { authMiddleware } = require("../middlewares/authMiddleware");
// const verifyRoles = require("../middlewares/roleMiddleware");

router.post(
  "/street-animal-info",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  UploadStreetAnimalInfo.Post_UploadStreetAnimalInfo
);
router.get(
  "/street-animal-info",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  UploadStreetAnimalInfo.get_UploadStreetAnimalInfo
);
router.get(
  "/street-animal-info/:id",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  UploadStreetAnimalInfo.getSingle_UploadStreetAnimalInfo
);
router.put(
  "/street-animal-info/:id",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  UploadStreetAnimalInfo.update_UploadStreetAnimalInfo
);
router.delete(
  "/street-animal-info/:id",
  // authMiddleware,
  // verifyRoles(ALL_ROLES),
  UploadStreetAnimalInfo.delete_UploadStreetAnimalInfo
);

module.exports = router;
