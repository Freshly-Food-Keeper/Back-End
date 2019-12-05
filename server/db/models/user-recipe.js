const Sequelize = require('sequelize');
const db = require('../db');
const Recipe = require('./recipe');

const UserRecipe = db.define('users_recipes', {
  timesMade: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  // apiId: {
  //   type: Sequelize.INTEGER,
  // },
});

module.exports = UserRecipe;
