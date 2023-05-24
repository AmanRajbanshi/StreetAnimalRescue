const router = require("express").Router();
const Contact = require("../controllers/contactController");

router.post("/contact", Contact.Post_Contact);
router.get("/contact", Contact.get_Contact);
router.get("/contact/:id", Contact.getSingle_Contact);
router.put("/contact/:id", Contact.update_Contact);
router.delete("/contact/:id", Contact.delete_Contact);

module.exports = router;
