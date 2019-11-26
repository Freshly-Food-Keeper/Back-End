const Sequelize = require('sequelize');
const db = require('../db');

const UserFood = db.define('user_food', {
  startDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Pending',
    validate: {
      notEmpty: true,
      isIn: [['Eaten', 'Thrown Away', 'Pending']],
    },
  },
});

module.exports = UserFood;

// Instances

UserFood.findByUser = function(foodId, userId) {
  return this.findOne({
    where: {
      foodId,
      userId,
    },
  });
};

UserFood.countFoodConsumed = function(userId) {
  return this.findAndCountAll({
    where: {
      userId,
      status: 'Eaten',
    },
  });
};

UserFood.countFoodWasted = function(userId) {
  return this.findAndCountAll({
    where: {
      userId,
      status: 'Thrown Away',
    },
  });
};
