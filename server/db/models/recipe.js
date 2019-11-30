const Sequelize = require('sequelize');
const db = require('../db');

// recipes will be stored as a url to link to the same recipe
const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
  apiId: {
    type: Sequelize.INTEGER,
  },
  imgUrl: {
    type: Sequelize.STRING,
  },
});

module.exports = Recipe;

Recipe.findOrCreateRecipe = function(reqBody) {
  const recipe = this.findOrCreate({
    where: {
      apiId: reqBody.apiId,
    },
    defaults: {
      name: reqBody.name,
      url: reqBody.url,
      imgUrl: reqBody.imgUrl,
    },
  });
  return recipe;
};
