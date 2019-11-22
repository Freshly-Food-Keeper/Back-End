const router = require("express").Router();
module.exports = router;

router.get("/testing", (req, res, next) => {
  res.json({
    productId: 4,
    item: "something",
    quantity: 7
  });
});

router.use("/:userId", require("./users"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
