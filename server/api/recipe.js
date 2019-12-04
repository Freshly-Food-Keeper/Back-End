const router = require('express').Router();
const { User, Recipe } = require('../db/models');

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
    const user = await User.findByPk(req.query.userId);

    const recipe = await Recipe.create(req.body);

    // const recipe = await Recipe.findOrCreateRecipe(req.body);
    await user.addRecipe(recipe);
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
