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
ExpirationDate.hasOne(Food);
Food.belongsTo(ExpirationDate);

module.exports = {
  User,
  Food,
  Recipe,
  ExpirationDate,
  UserFood,
  UserRecipe
};
