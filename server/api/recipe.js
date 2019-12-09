const router = require("express").Router();
const { User, Recipe, UserRecipe } = require("../db/models");

// Get all recipes for a given user id
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.query.userId);
    const recipe = await user.getRecipes();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

// Add new recipe for user
router.post("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.query.userId);
    const {
      apiId,
      title,
      image,
      readyInMinutes,
      servings,
      instructions,
      ingredients
    } = req.body;
    const recipe = await Recipe.findOrCreate({
      where: {
        apiId: Number(req.body.apiId)
      },
      defaults: {
        apiId,
        title,
        image,
        readyInMinutes,
        servings,
        instructions,
        ingredients
      }
    });
    await user.addRecipe(recipe[0]);
    res.json(recipe[0]);
  } catch (err) {
    next(err);
  }
});

// Delete recipe for user
router.delete("/", async (req, res, next) => {
  try {
    const apiId = req.query.apiId;
    const user = await User.findByPk(req.query.userId);
    console.log("apiId in delete route", apiId);
    const foundRecipe = await Recipe.findOne({
      where: {
        apiId
      }
    });

    const recipeId = foundRecipe.dataValues.id;
    console.log("recipeId in delete route", recipeId);
    await UserRecipe.destroy({
      where: {
        userId: user.id,
        recipeId: recipeId
      }
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
