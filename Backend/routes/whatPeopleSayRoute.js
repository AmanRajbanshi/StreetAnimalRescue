const router = require("express").Router();
const WhatPeopleSay = require("../controllers/whatPeopleSayController");

router.post("/testimonial", WhatPeopleSay.Post_WhatPeopleSay);
router.get("/testimonial", WhatPeopleSay.get_WhatPeopleSay);
router.get("/testimonial/:id", WhatPeopleSay.getSingle_WhatPeopleSay);
router.patch("/testimonial/:id", WhatPeopleSay.update_WhatPeopleSay);
router.delete("/testimonial/:id", WhatPeopleSay.delete_WhatPeopleSay);

module.exports = router;
