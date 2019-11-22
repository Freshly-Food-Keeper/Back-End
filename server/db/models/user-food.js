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
    defaultValue: "Pending",
    validate: {
      notEmpty: true,
      isIn: [["Eaten", "Thrown Away", "Pending"]]
    }
  }
});

module.exports = UserFood;
