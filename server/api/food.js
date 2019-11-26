const router = require('express').Router();
const { User, UserFood, Food, ExpirationDate } = require('../db/models');

const calculateExpiresIn = (startDate, expirationDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const diffDays = Math.ceil((now - start) / (1000 * 60 * 60 * 24));

  console.log('diffDays', diffDays);
  console.log('exp - diff', expirationDate - diffDays);

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
router.get('/', async (req, res, next) => {
  try {
    const allFood = await User.findAll({
      include: [
        {
          model: Food,
          include: [{ model: ExpirationDate, attributes: ['life'] }],
          through: {
            where: { status: 'Pending' },
          },
          attributes: ['id', 'name', 'imageUrl'],
        },
      ],
      attributes: ['id'],
      where: {
        id: req.query.userId,
      },
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
        expiresIn,
      };
    });

    res.json(foodArr);
  } catch (err) {
    next(err);
  }
});

// Add new food for user, and check if food exists in Food model. If not, create
router.post('/', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.query.userId);
    const food = await Food.findOrCreate({
      where: {
        name: req.body.name,
      },
    });
    await user.addFood(food[0]);
    res.json(food[0]);
  } catch (err) {
    next(err);
  }
});

// Get specific food for user
router.get('/:foodId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.query.userId);
    const foodId = req.params.foodId;
    const food = await user.getFood({
      where: {
        id: foodId,
      },
    });
    res.json(food);
  } catch (err) {
    next(err);
  }
});
// Delete specific food from user
router.delete('/:foodId', async (req, res, next) => {
  try {
    const foodId = req.params.foodId;
    const user = await User.findByPk(req.query.userId);
    await user.removeFood(foodId);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// Update specific food for user
router.put('/:foodId', async (req, res, next) => {
  const foodId = req.params.foodId;
  const userId = req.query.userId;
  try {
    const food = await UserFood.findByUser(foodId, userId);
    await food.update(req.body);
    res.json(food);
  } catch (err) {
    next(err);
  }
});
