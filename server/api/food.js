const router = require("express").Router();
const { Food } = require("../db/models");
const { User } = require("../db/models");
const { UserFood } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const food = await user.getFoods();
    res.json(food);
  } catch (err) {
    next(err);
  }
});

router.get("/:foodId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const food = await user.getFood({
      where: {
        id: req.params.foodId
      }
    });
    res.json(food);
  } catch (err) {
    next(err);
  }
});

router.post("/:foodId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const food = await Food.findOrCreate({
      where: {
        name: req.body.name
      }
    });
    await user.addFood(food[0]);
    res.json(food);
  } catch (err) {
    next(err);
  }
});

router.delete("/:foodId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const food = await Food.findOrCreate({
      where: {
        name: req.body.name
      }
    });
    await user.removeFood(food[0]);
    res.json(food);
  } catch (err) {
    next(err);
  }
});

router.put("/:foodId", async (req, res, next) => {
  try {
    const food = await UserFood.findByPk({
      where: {
        foodId: req.params.foodId,
        userId: req.params.userId
      }
    });
    await food.update(req.body);
    res.json(food);
  } catch (err) {
    next(err);
  }
});
