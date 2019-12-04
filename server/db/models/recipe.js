const Sequelize = require('sequelize');
const db = require('../db');

// recipes will be stored as a url to link to the same recipe
const Recipe = db.define('recipe', {
  title: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  readyInMinutes: {
    type: Sequelize.INTEGER,
  },
  servings: {
    type: Sequelize.INTEGER,
  },
  instructions: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
});

module.exports = Recipe;
