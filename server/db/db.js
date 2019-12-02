const Sequelize = require("sequelize");
require("../../secrets.js");

const databaseName =
  process.env.NODE_ENV === "test"
    ? process.env.DATABASE_URL + "-test"
    : process.env.DATABASE_URL;
const db = new Sequelize(databaseName, { logging: false });
module.exports = db;

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === "test") {
  after("close database connection", () => db.close());
}
