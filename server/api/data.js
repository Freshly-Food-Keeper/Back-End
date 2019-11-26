const router = require('express').Router();
const { UserFood } = require('../db/models');

// Data route for calculating and sending back the percentage of food consumed vs wasted
router.get('/', async (req, res, next) => {
  try {
    const userId = req.body;
    const consumed = await UserFood.countFoodConsumed(userId);
    const wasted = await UserFood.countFoodWasted(userId);

    if (consumed && wasted) {
      const consumedCount = consumed.count;
      const wastedCount = wasted.count;
      const sumCount = consumedCount + wastedCount;

      const percentagesObj = {
        consumed: Math.round(consumedCount / sumCount * 100),
        wasted: 100 - Math.round(consumedCount / sumCount * 100),
      };
      res.json(percentagesObj);
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
