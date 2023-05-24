// const { ALL_ROLES } = require("../common/constants");
const {
  createALike,
  getALlEventLikes,
} = require("../controllers/eventLikeController");
// const { authMiddleware } = require("../middlewares/authMiddleware");
// const verifyRoles = require("../middlewares/roleMiddleware");

const router = require("express").Router();

router.put("/:id", createALike);

router.get("", getALlEventLikes);
//routes /api/v1/like-event
//router.get("/",  createALike);

module.exports = router;
