const router = require('express').Router();
const { User, UserFood, Food, ExpirationDate } = require('../db/models');

// Get all recipes for a given user id
router.get('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.query.userId);
    const recipe = await user.getRecipes();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

// Add new recipe for user
router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const recipe = await Recipe.findOrCreate({
      where: {
        apiId: req.body.apiId,
      },
      defaults: {
        name: req.body.name,
        url: req.body.url,
        imgUrl: req.body.imgUrl,
      },
    });
    await user.addRecipe(recipe[0]);
    res.json(recipe[0]);
  } catch (err) {
    next(err);
  }
});
