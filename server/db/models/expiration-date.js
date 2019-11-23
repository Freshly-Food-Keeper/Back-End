const Sequelize = require("sequelize");
const db = require("../db");

const ExpirationDate = db.define("expiration_date", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  keywords: {
    type: Sequelize.TEXT
  },
  life: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = ExpirationDate;
