/* global describe beforeEach it */

const { expect } = require("chai");
const db = require("../index");
const User = db.model("user");
var should = require("chai").should();

describe("User model", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  const user = {
    email: "emma@gmail.com",
    firstName: "Emma",
    lastName: "Curtis",
    imageUrl:
      "https://images.ctfassets.net/oxjq45e8ilak/2TGv5KhlzHxWNVtNyseaEY/f4f2108d1340fbeb2a57cf3c2d363bf0/MicrosoftTeams-image__1_.png",
    password: "123"
  };

  it("should have property `email`", function() {
    user.should.have.property("email").equal("emma@gmail.com");
  });

  it("should have property `first name` and `last name`", function() {
    user.should.have.property("firstName").equal("Emma");
    user.should.have.property("lastName").equal("Curtis");
  });

  it("should have property `password`", function() {
    user.should.have.property("password").equal("123");
  });

  it("checks for null", function() {
    var user = null;
    should.not.exist(user);
  });

  describe("instanceMethods", () => {
    describe("correctPassword", () => {
      let emma;

      beforeEach(async () => {
        emma = await User.create({
          email: "emma@gmail.com",
          password: "123"
        });
      });

      it("returns true if the password is correct", () => {
        expect(emma.correctPassword("123")).to.be.equal(true);
      });

      it("returns false if the password is incorrect", () => {
        expect(emma.correctPassword("234")).to.be.equal(false);
      });
    }); // end describe('correctPassword')
  }); // end describe('instanceMethods')
}); // end describe('User model')
