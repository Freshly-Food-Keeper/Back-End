const Sequelize = require("sequelize");
const db = require("../db");
const ExpirationDate = require("./expiration-date");
const Op = Sequelize.Op;

const Food = db.define("food", {
  name: {
    type: Sequelize.STRING,
    allowull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "../../../assets/food-placeholder.jpg"
  }
});

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

    if (shelfLife !== null || shelfLife !== undefined) {
      foodInstance.expirationDateId = shelfLife.id;
    }
  }
});

module.exports = Food;
