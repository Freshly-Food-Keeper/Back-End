const User = require('./user');
const Food = require('./food');
const Recipe = require('./recipe');
const UserFood = require('./user-food');
const ExpirationDate = require('./expiration-date');

// User.belongsToMany(Recipe, { through: 'UserRecipe' });
// Recipe.belongsToMany(User, { through: 'UserRecipe' });
// User.belongsToMany(Food, { as: 'Inventory', through: UserFood });
// Food.belongsToMany(User, { as: 'Inventory', through: UserFood });

module.exports = {
  User,
  Food,
  Recipe,
  ExpirationDate
};
