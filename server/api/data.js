const router = require('express').Router();
const { UserFood } = require('../db/models');
const { calculateFoodPercentages } = require('../utils');

// Data route for calculating and sending back the percentage of food consumed vs wasted

router.get('/', async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const consumed = await UserFood.countFoodConsumed(userId);
    const wasted = await UserFood.countFoodWasted(userId);
    if (consumed && wasted) {
      res.json(calculateFoodPercentages(consumed.count, wasted.count));
    } else {
      res.json({
        consumed: 0,
        wasted: 0,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
