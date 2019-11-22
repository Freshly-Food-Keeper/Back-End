const router = require("express").Router();
module.exports = router;

router.use("/food,", require("./food"));
router.use("/recipes", require("./recipes"));
