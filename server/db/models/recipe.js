const Sequelize = require('sequelize')
const db = require('../../../db/db')

// recipes will be stored as a url to link to the same recipe
const Recipe = db.define('recipe', {
  url: {
    type: Sequelize.STRING
  }
})

module.exports = Recipe