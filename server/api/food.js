const router = require("express").Router();
const { User, UserFood, Food } = require("../db/models");
const { getFoodArray } = require("../utils");

// Get all foods for a given user id
router.get("/", async (req, res, next) => {
  const userId = req.query.userId;
  try {
    const allFood = await User.getAllFood(userId);
    const foodArr = getFoodArray(allFood);
    if (foodArr) {
      res.json(foodArr);
    } else {
      res.send("No items found! Please add an item to your inventory");
    }
  } catch (err) {
    next(err);
  }
});

// Add new food for user, and check if food exists in Food model. If not, create
router.post("/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.body.userId);
    const name = req.body.food;
    const shelfLife = req.body.shelfLife;
    const imageUrl = req.body.imageUrl;
    const foodItem = await User.createFoodItem(name, imageUrl);
    const userFoodItem = await UserFood.createFoodItem(
      foodItem.id,
      user.id,
      shelfLife
    );
    res.json(userFoodItem);
  } catch (err) {
    next(err);
  }
});

// Get specific food for user
router.get("/:foodId", async (req, res, next) => {
  try {
    const foodId = req.params.foodId;
    const food = await User.getFoodById(foodId);
    if (food) {
      res.json(food);
    } else {
      res.status(404).send("The item could not be retrieved");
    }
  } catch (err) {
    next(err);
  }
});

// Delete specific food from user
router.delete("/:foodId", async (req, res, next) => {
  try {
    const foodId = req.query.foodId;
    const user = await User.findByPk(req.query.userId);
    await user.removeFood(foodId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Update specific food for user
router.put("/", async (req, res, next) => {
  const foodId = req.body.foodId;
  const userId = req.body.userId;
  try {
    const food = await UserFood.findByUser(foodId, userId);
    await food.update(req.body);
    res.status(201).json(food);
  } catch (err) {
    next(err);
  }
});

router.post("/updateFood", async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const foodId = req.body.foodId;
    const user = await User.findByPk(userId);
    const name = req.body.food;
    const shelfLife = req.body.shelfLife;
    const imageUrl = req.body.imageUrl;
    const foodItem = await User.createFoodItem(name, imageUrl);
    const userFoodItem = await UserFood.createFoodItem(
      foodItem.id,
      user.id,
      shelfLife
    );
    await user.removeFood(foodId);
    res.json(userFoodItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
