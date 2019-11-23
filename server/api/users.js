const router = require("express").Router();
const { Recipe } = require("../db/models");
const { User } = require("../db/models");
const { UserFood } = require("../db/models");
const { Food } = require("../db/models");
module.exports = router;

router.get("/:userId/foods", async (req, res, next) => {
  try {
    const allFood = await UserFood.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.json(allFood);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId/recipes", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const recipe = await user.getRecipes();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId/foods/:foodId", async (req, res, next) => {
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

router.post("/:userId/foods", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const food = await Food.findOrCreate({
      where: {
        name: req.body.name
      }
    });
    await user.addFood(food[0]);
    res.json(food[0]);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId/foods/:foodId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.removeFood(req.params.foodId);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId/foods/:foodId", async (req, res, next) => {
  try {
    const food = await UserFood.findOne({
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

router.post("/:userId/recipes", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const recipe = await Recipe.findOrCreate({
      where: {
        apiId: req.body.apiId
      },
      defaults: {
        name: req.body.name,
        url: req.body.url,
        imgUrl: req.body.imgUrl
      }
    });
    await user.addRecipe(recipe[0]);
    res.json(recipe[0]);
  } catch (err) {
    next(err);
  }
});
