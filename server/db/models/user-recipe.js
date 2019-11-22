const Sequelize = require("sequelize");
const db = require("../db");

const UserRecipe = db.define("users_recipes", {
  timesMade: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = UserRecipe;
