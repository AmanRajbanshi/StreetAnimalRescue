const router = require("express").Router();
const UserSubscribe = require("../controllers/userSubscribeController");

router.post("/user-subscribe", UserSubscribe.Post_UserSubscribe);
router.get("/user-subscribe", UserSubscribe.get_UserSubscribe);
router.get("/user-subscribe/:id", UserSubscribe.getSingle_UserSubscribe);
router.put("/user-subscribe/:id", UserSubscribe.update_UserSubscribe);
router.delete("/user-subscribe/:id", UserSubscribe.delete_UserSubscribe);

module.exports = router;
