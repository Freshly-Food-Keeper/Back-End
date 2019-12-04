const Sequelize = require("sequelize");
const db = require("../db");
const ExpirationDate = require("./expiration-date");
const Food = require("./food");
const UserFood = db.define("user_food", {
  startDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Pending",
    validate: {
      notEmpty: true,
      isIn: [["Eaten", "Thrown Away", "Pending"]]
    }
  },
  shelfLife: {
    type: Sequelize.STRING
  }
});
module.exports = UserFood;
// Instances
UserFood.findByUser = function(foodId, userId) {
  return this.findOne({
    where: {
      foodId,
      userId
    }
  });
};
UserFood.countFoodConsumed = function(userId) {
  return this.findAndCountAll({
    where: {
      userId,
      status: "Eaten"
    }
  });
};
UserFood.countFoodWasted = function(userId) {
  return this.findAndCountAll({
    where: {
      userId,
      status: "Thrown Away"
    }
  });
};

const preLoadShelfLife = async userFood => {
  if (!userFood.shelfLife) {
    try {
      const food = await Food.findByPk(userFood.foodId);
      const expirationDate = await ExpirationDate.findByPk(
        food.expirationDateId
      );
      userFood.shelfLife = expirationDate;
    } catch (error) {
      console.error(error);
    }
  }
};

UserFood.afterCreate(preLoadShelfLife);

UserFood.createFoodItem = async function(foodId, userId, shelfLife) {
  const newFood = await UserFood.findOrCreate({
    where: {
      foodId: foodId,
      userId: userId
    },
    defaults: {
      shelfLife
    }
  });
  return newFood;
};
