const router = require("express").Router();
const { Recipe } = require("../db/models");
const { User } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const recipe = await user.getRecipes();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

router.get("/:recipeId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const recipes = await user.getRecipes({
      where: {
        id: req.params.recipeId
      }
    });
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});
