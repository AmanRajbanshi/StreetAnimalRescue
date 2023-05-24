// const { ADMIN_ROLE, ALL_ROLES } = require("../common/constants");
const {
  createEvent,
  updateEvent,
  getEvents,
  deleteEvent,
  getSingleEvent,
} = require("../controllers/eventController");
// const { authMiddleware } = require("../middlewares/authMiddleware");
// const verifyRoles = require("../middlewares/roleMiddleware");

const router = require("express").Router();

//router.post("/", authMiddleware, verifyRoles(ADMIN_ROLE), createEvent);
router.post("/", createEvent);
router.get("/", getEvents);
router.get("/:id", getSingleEvent);

//router.put("/update/:id", authMiddleware, verifyRoles(ALL_ROLES), updateEvent);
router.put("/update/:id", updateEvent);
router.delete("/delete/:id", deleteEvent);

module.exports = router;
