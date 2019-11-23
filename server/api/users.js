const router = require("express").Router();
const { Recipe } = require("../db/models");
const { User } = require("../db/models");
const { UserFood } = require("../db/models");
const { Food } = require("../db/models");
const { ExpirationDate } = require("../db/models");
module.exports = router;

// Get all foods for a given user id
router.get("/:userId/foods", async (req, res, next) => {
  // OUPUT
  // [
  //   {
  //     id: 1,
  //     food: [
  //       {
  //         id: 2,
  //         name: 'apple',
  //         expiration_date: {
  //           life: '6 Months'
  //         },
  //         user_food: {
  //           startDate: '2019-11-23T13:33:42.187Z',
  //           eatBy: 5,
  //           status: 'Pending',
  //           createdAt: '2019-11-23T13:33:42.753Z',
  //           updatedAt: '2019-11-23T13:33:42.753Z',
  //           userId: 1,
  //           foodId: 2
  //         }
  //       }
  //     ]
  //   }
  // ]
  try {
    const allFood = await User.findAll({
      include: [
        {
          model: Food,
          include: [{ model: ExpirationDate, attributes: ["life"] }],
          attributes: ["id", "name"]
        }
      ],
      attributes: ["id"],
      where: {
        id: req.params.userId
      }
    });
    res.json(allFood);
  } catch (err) {
    next(err);
  }
});

// Get all recipes for a given user id
router.get("/:userId/recipes", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const recipe = await user.getRecipes();
    res.json(recipe);
  } catch (err) {
    next(err);
  }
});

// Get specific food for user
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

// Add new food for user, and check if food exists in Food model. If not, create
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

// Delete specific food from user
router.delete("/:userId/foods/:foodId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.removeFood(req.params.foodId);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// Update specific food for user
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

// Add new recipe for user
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
