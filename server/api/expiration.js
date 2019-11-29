const router = require("express").Router();
const { ExpirationDate } = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//get food expiration date for pre-loaded form data
router.get("/:foodName", async (req, res, next) => {
  try {
    const expirationDate = await ExpirationDate.findAll({
      where: {
        name: {
          [Op.iLike]: `%${req.params.foodName}%`
        }
      }
    });
    res.json(expirationDate[0].life);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
