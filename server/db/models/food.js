const Sequelize = require('sequelize');
const db = require('../db');
// recipes will be stored as a url to link to the same recipe
const Food = db.define('food', {
  name: {
    type: Sequelize.STRING,
    allowull: false
  }
});
module.exports = Food;
