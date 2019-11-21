const Sequelize = require('sequelize');
const db = require('../db');

// recipes will be stored as a url to link to the same recipe
const UserFood = db.define('recipe', {
  startDate: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  },
  eatBy: {
    type: Sequelize.DATE
  }
});

module.exports = UserFood;
