const Sequelize = require("sequelize");
const db = require("../db");

const UserFood = db.define("user_food", {
  startDate: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  eatBy: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "wasted"
  }
});

module.exports = UserFood;
