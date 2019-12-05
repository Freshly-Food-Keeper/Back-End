const Sequelize = require("sequelize");
const db = require("../db");

const UserRecipe = db.define("users_recipes", {
  timesMade: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

// const getApiId = async userRecipe => {
//   try {
//     const recipe = await Recipe.findByPk(userRecipe.recipeId);
//     console.log(recipe)
//     const apiId = recipe.apiId
//     userRecipe.apiId = apiId;
//   } catch (error) {
//     console.error(error);
//   }
// };

// UserRecipe.beforeCreate(getApiId)

module.exports = UserRecipe;
