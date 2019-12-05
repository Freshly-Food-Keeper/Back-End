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

// UserRecipe.beforeCreate(async function(userRecipe) {
//   try {
//     const recipe = await Recipe.findByPk(userRecipe.recipeId);
//     console.log('recipe in getapi', recipe);
//     const apiId = recipe.apiId;
//     userRecipe.apiId = apiId;
//   } catch (err) {
//     console.error(err);
//   }
// });

// UserRecipe.beforeUpdate(async function(userRecipe) {
//   try {
//     const recipe = await Recipe.findByPk(userRecipe.recipeId);
//     console.log('recipe in getapi', recipe);
//     const apiId = recipe.apiId;
//     userRecipe.apiId = apiId;
//   } catch (err) {
//     console.error(err);
//   }
// });
