/* global describe beforeEach it */

const { expect } = require("chai");
const db = require("../index");
const User = db.model("user");
const UserFood = db.model("user_food");
const Food = db.model("food");
var should = require("chai").should();

describe("User Food model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const newDate = Date.now();

  const userFood = {
    startDate: newDate,
    userId: 2,
    foodId: 3,
    status: "Eaten"
  };

  it("should have property `startDate`", function() {
    userFood.should.have.property("startDate").equal(newDate);
  });

  it("should have property `userId` and `foodId`", function() {
    userFood.should.have.property("userId").equal(2);
    userFood.should.have.property("foodId").equal(3);
  });

  it("should have property `status`", function() {
    userFood.should.have.property("status").equal("Eaten");
  });

  describe("instanceMethods", () => {
    describe("find by user", () => {
      let meredyth;
      let foodItem1, foodItem2;

      beforeEach(async () => {
        meredyth = await User.create({
          email: "meredyth@gmail.com",
          password: "123"
        });
        const newUserFood = [
          {
            startDate: newDate,
            userId: 1,
            foodId: 1,
            status: "Thrown Away"
          },
          {
            startDate: newDate,
            userId: 1,
            foodId: 2,
            status: "Eaten"
          }
        ];

        foodItem1 = await Food.findOrCreate({
          where: {
            name: "apple"
          }
        });
        foodItem2 = await Food.findOrCreate({
          where: {
            name: "banana"
          }
        });
        await meredyth.addFood(foodItem1[0]);
        await meredyth.addFood(foodItem2[0]);
      });

      it("findByUser: returns the food queried", async () => {
        const food1 = await UserFood.findByUser(foodItem1[0].id, meredyth.id);
        expect(food1.status).to.be.equal("Pending");
        expect(food1.userId).to.be.equal(1);
        expect(food1.foodId).to.be.equal(1);
      });

      it("countFoodConsumed: returns number of Eaten items", async () => {
        const food2 = await UserFood.findByUser(foodItem2[0].id, meredyth.id);
        await food2.update({ status: "Eaten" });
        const eaten = await UserFood.countFoodConsumed(meredyth.id);
        expect(eaten.count).to.be.equal(1);
      });

      it("countFoodWasted: returns number of thrown away items", async () => {
        const food1 = await UserFood.findByUser(foodItem1[0].id, meredyth.id);
        await food1.update({ status: "Thrown Away" });

        const food2 = await UserFood.findByUser(foodItem2[0].id, meredyth.id);
        await food2.update({ status: "Thrown Away" });

        const thrownOut = await UserFood.countFoodWasted(meredyth.id);
        expect(thrownOut.count).to.be.equal(2);
      });
    });
  });
}); // end describe('User Food model')
