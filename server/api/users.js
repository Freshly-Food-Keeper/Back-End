const router = require("express").Router();
const { Recipe } = require("../db/models");
const { User } = require("../db/models");
const { UserFood } = require("../db/models");
const { Food } = require("../db/models");
const { ExpirationDate } = require("../db/models");
module.exports = router;

const calculateExpiresIn = (startDate, expirationDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const diffDays = Math.ceil((now - start) / (1000 * 60 * 60 * 24));

  console.log("diffDays", diffDays);
  console.log("exp - diff", expirationDate - diffDays);

  return expirationDate - diffDays;
};

// Get all foods for a given user id
/* OUTPUT
  [
    {
        "id": 10,
        "name": "potato",
        "imageUrl": "../../../assets/food-placeholder.jpg",
        "expiresIn": 349
    },
    {
        "id": 11,
        "name": "lettuce",
        "imageUrl": "../../../assets/food-placeholder.jpg",
        "expiresIn": 19
    },  
  ]
*/
router.get("/:userId/foods", async (req, res, next) => {
  try {
    const allFood = await User.findAll({
      include: [
        {
          model: Food,
          include: [{ model: ExpirationDate, attributes: ["life"] }],
          through: {
            where: { status: "Pending" }
          },
          attributes: ["id", "name", "imageUrl"]
        }
      ],
      attributes: ["id"],
      where: {
        id: req.params.userId
      }
    });

    const foodArr = allFood[0].food.map(food => {
      let expiresIn = food.expiration_date
        ? calculateExpiresIn(
            food.user_food.startDate,
            food.expiration_date.life
          )
        : null;

      return {
        id: food.id,
        name: food.name,
        imageUrl: food.imageUrl,
        expiresIn
      };
    });

    res.json(foodArr);
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
