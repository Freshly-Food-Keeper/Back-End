const Sequelize = require("sequelize");
const db = require("../db");
const ExpirationDate = require("./expiration-date");
const Op = Sequelize.Op;
const User = require("./user");

const Food = db.define("food", {
  name: {
    type: Sequelize.STRING,
    allowull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  }
});

//Hooks

// This lifecycle hook adds an expiration date if found to food
Food.afterCreate(async function(foodInstance) {
  if (foodInstance.expirationDateId === null) {
    const shelfLife = await ExpirationDate.findOne({
      where: {
        name: {
          [Op.iLike]: `%${foodInstance.name}%`
        }
      }
    });

    if (shelfLife !== null && shelfLife !== undefined) {
      foodInstance.expirationDateId = shelfLife.id;
    }
  }
});

// Instances
User.getAllFood = function(userId) {
  return this.findAll({
    include: [
      {
        model: Food,
        include: [{ model: ExpirationDate, attributes: ["life"] }],
        through: {
          where: { status: "Pending" }
        }
      }
    ],
    where: {
      id: userId
    }
  });
};

User.getFoodById = function(foodId) {
  return this.getFood({
    where: {
      id: foodId
    }
  });
};

User.createFoodItem = async function(name, imageUrl) {
  const newFood = await Food.findOrCreate({
    where: {
      name: name
    },
    defaults: {
      imageUrl
    }
  });
  return newFood[0];
};

module.exports = Food;
