const User = require("./user");
const Food = require("./food");
const Recipe = require("./recipe");
const UserFood = require("./user-food");
const UserRecipe = require("./user-recipe");
const ExpirationDate = require("./expiration-date");

Recipe.belongsToMany(User, { through: UserRecipe });
User.belongsToMany(Recipe, { through: UserRecipe });
User.belongsToMany(Food, { through: UserFood });
Food.belongsToMany(User, { through: UserFood });
Food.hasOne(ExpirationDate);
ExpirationDate.belongsTo(Food);

module.exports = {
  User,
  Food,
  Recipe,
  ExpirationDate,
  UserFood,
  UserRecipe
};
