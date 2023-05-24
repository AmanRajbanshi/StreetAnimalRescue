const router = require("express").Router();
const UpcomingEvent = require("../controllers/UpcomingEventController");

router.post("/upcomingEvent", UpcomingEvent.Post_UpcomingEvent);
router.get("/upcomingEvent", UpcomingEvent.get_UpcomingEvent);
router.get("/upcomingEvent/:id", UpcomingEvent.getSingle_UpcomingEvent);
router.put("/upcomingEvent/:id", UpcomingEvent.update_UpcomingEvent);
router.delete("/upcomingEvent/:id", UpcomingEvent.delete_UpcomingEvent);

module.exports = router;
