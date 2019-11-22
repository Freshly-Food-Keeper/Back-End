const Sequelize = require("sequelize");
const db = require("../db");

const ExpirationDate = db.define("expiration_date", {
  Name: {
    type: Sequelize.TEXT
  },
  Keywords: {
    type: Sequelize.TEXT
  },
  PantryMin: {
    type: Sequelize.TEXT
  },
  PantryMax: {
    type: Sequelize.TEXT
  },
  PantryMetric: {
    type: Sequelize.TEXT
  },
  RefrigerateMin: {
    type: Sequelize.INTEGER
  },
  RefrigerateMax: {
    type: Sequelize.INTEGER
  },
  RefrigerateMetric: {
    type: Sequelize.TEXT
  },
  RefrigerateTips: {
    type: Sequelize.TEXT
  },
  FreezeMin: {
    type: Sequelize.INTEGER
  },
  FreezeMax: {
    type: Sequelize.INTEGER
  },
  FreezeMetric: {
    type: Sequelize.TEXT
  },
  FreezeTips: {
    type: Sequelize.TEXT
  }
});

module.exports = ExpirationDate;
