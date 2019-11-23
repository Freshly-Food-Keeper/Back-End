const Sequelize = require("sequelize");
const db = require("../db");
const ExpirationDate = require("./expiration-date");
const Op = Sequelize.Op;

const Food = db.define("food", {
  name: {
    type: Sequelize.STRING,
    allowull: false
  }
});

Food.beforeCreate(async function(foodInstance) {
  if (foodInstance.expirationDateId === null) {
    const shelfLife = await ExpirationDate.findOne({
      where: {
        name: {
          [Op.iLike]: `%${foodInstance.name}%`
        }
      }
    });
    foodInstance.expirationDateId = shelfLife.id;
  }
});

module.exports = Food;
