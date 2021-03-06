"use strict";

const db = require("../server/db");
const {
  User,
  Food,
  Recipe,
  ExpirationDate,
  UserFood,
  UserRecipe
} = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = [
    {
      firstName: "Emma",
      lastName: "Curtis",
      email: "emma@gmail.com",
      password: "123"
    },
    {
      firstName: "Meredyth",
      lastName: "Houpos",
      email: "meredyth@gmail.com",
      password: "234"
    },
    {
      firstName: "Emma",
      lastName: "Munley",
      email: "emmma.m@gmail.com",
      password: "123"
    },
    {
      firstName: "Sharmin",
      lastName: "Sultana",
      email: "sharmin@gmail.com",
      password: "234"
    }
  ];

  const recipes = [
    {
      title: "Black Truffle Caesar Salad",
      instructions: [
        "Add lemon juice, olive oil, and salt to a blender or small food processor",
        "Grate half the truffles into the blender and reserve remainder to grate over the salad as a garnish.",
        "Blend dressing until thick and creamy. Taste and adjust salt and oil to lemon ratio to suite your taste.",
        "Chop, wash and dry the lettuce.",
        "Toss with dress and plate.",
        "Add duck if using.",
        "Shave remaining truffles over each plate and serve."
      ],

      image: "https://spoonacular.com/recipeImages/635161-312x231.jpg",
      ingredients: [
        "1 head romain lettuce",
        "1 Large Lemon, Juiced",
        "8 ounces shredded duck confit leg and thigh (optional)"
      ],
      readyInMinutes: 45,
      servings: 4,
      apiId: 635161
    },
    {
      title: "Butternut Squash Frittata",
      image: "https://spoonacular.com/recipeImages/636589-312x231.jpg",
      instructions: [
        "Preheat oven to 350",
        "Spray a 10 oz oven safe dish with cooking spray",
        "Add your butternut squash",
        "In a measuring cup add your eggs and milk. Mix until combined. Pour over butternut squash.",
        "Sprinkle with pepper and top with cheese.",
        "Bake in oven for 30-35 minutes, until middle is slightly firm",
        "Let it cool for a few minutes"
      ],
      ingredients: [
        "1 largebutternut squash",
        "1/2 ozgoat cheese",
        "1/2 cupsliquid egg substitute",
        "2 Tbsps non-fat milk",
        "somebell pepper"
      ],
      servings: 2,
      readyInMinutes: 45,
      apiId: 636589
    },
    {
      title: "Chocolatey Overnight Oats with Strawberries",
      image: "https://spoonacular.com/recipeImages/639303-312x231.jpg",
      instructions: [
        "Mix all the ingredients, except for the strawberries.",
        "Place a bit of the oatmeal batter into a jar or other airtight container,Add slices of strawberries on top, Add another layer of oatmeal batter and strawberries. Top with the remaining oatmeal batter. Put it in the refrigerator overnight. Enjoy!"
      ],
      ingredients: [
        "1 tsp agave nectar",
        "1/3 cups almond milk",
        "0.5 Tbs chia seeds",
        "1 Tbs cocoa powder",
        "0.5 cups non-fat greek yogurt",
        "1/3 cups oatmeal",
        "3 large strawberries"
      ],
      servings: 1,
      readyInMinutes: 45,
      apiId: 639303
    }
  ];

  const food = [
    {
      name: "orange",
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/orange.jpg"
    },
    {
      name: "apple",
      expirationDateId: 49,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/apple.jpg"
    },
    {
      name: "potato",
      expirationDateId: 10,
      imageUrl:
        "https://spoonacular.com/cdn/ingredients_250x250/potatoes-yukon-gold.png"
    },
    {
      name: "carrot juice",
      expirationDateId: 28,
      imageUrl:
        "https://spoonacular.com/cdn/ingredients_250x250/carrot-juice.jpg"
    },
    {
      name: "barley",
      expirationDateId: 33,
      imageUrl:
        "https://spoonacular.com/cdn/ingredients_250x250/pearl-barley.png"
    },
    {
      name: "polenta",
      expirationDateId: 39,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/cornmeal.png"
    },
    {
      name: "zucchini",
      expirationDateId: 41,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/zucchini.jpg"
    },
    {
      name: "bison",
      expirationDateId: 46,
      imageUrl:
        "https://spoonacular.com/cdn/ingredients_250x250/fresh-ground-beef.jpg"
    },
    {
      name: "bacon",
      expirationDateId: 65,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/raw-bacon.png"
    },
    {
      name: "bananas",
      expirationDateId: 86,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/bananas.jpg"
    },
    {
      name: "grapes",
      expirationDateId: 133,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/red-grapes.jpg"
    },
    {
      name: "lettuce",
      expirationDateId: 146,
      imageUrl:
        "https://spoonacular.com/cdn/ingredients_250x250/iceberg-lettuce.jpg"
    },
    {
      name: "avocado",
      expirationDateId: 141,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/avocado.jpg"
    },
    {
      name: "cucumber",
      expirationDateId: 145,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/cucumber.jpg"
    }
  ];

  const user_foods = [
    {
      userId: 3,
      foodId: 2,
      shelfLife: 1
    },
    {
      userId: 3,
      foodId: 4,
      shelfLife: 3
    },
    {
      userId: 3,
      foodId: 6,
      shelfLife: 5
    },
    {
      userId: 3,
      foodId: 8,
      shelfLife: 7
    },
    {
      userId: 3,
      foodId: 10,
      shelfLife: 10
    },
    {
      userId: 3,
      foodId: 12,
      shelfLife: 11
    },
    {
      userId: 1,
      foodId: 3,
      shelfLife: 3
    },
    {
      userId: 1,
      foodId: 5,
      shelfLife: 1
    },
    {
      userId: 1,
      foodId: 7,
      shelfLife: 4
    },
    {
      userId: 1,
      foodId: 9,
      shelfLife: 6
    },
    {
      userId: 1,
      foodId: 11,
      shelfLife: 7
    },
    {
      userId: 1,
      foodId: 13,
      shelfLife: 30
    },
    {
      userId: 2,
      foodId: 1,
      shelfLife: 25,
      status: "Eaten"
    },
    {
      userId: 2,
      foodId: 2,
      shelfLife: 22,
      status: "Eaten"
    },
    {
      userId: 2,
      foodId: 3,
      shelfLife: 15,
      status: "Eaten"
    },
    {
      userId: 2,
      foodId: 4,
      shelfLife: 5,
      status: "Eaten"
    },
    {
      userId: 2,
      foodId: 5,
      shelfLife: 8,
      status: "Thrown Away"
    },
    {
      userId: 2,
      foodId: 6,
      shelfLife: 10,
      status: "Thrown Away"
    },
    {
      userId: 2,
      foodId: 7,
      shelfLife: 1,
      status: "Thrown Away"
    },
    {
      userId: 2,
      foodId: 8,
      shelfLife: 1,
      status: "Thrown Away"
    },
    {
      userId: 2,
      foodId: 9,
      shelfLife: 1,
      status: "Thrown Away"
    },
    {
      userId: 2,
      foodId: 10,
      shelfLife: 17
    },
    {
      userId: 2,
      foodId: 11,
      shelfLife: 18
    },
    {
      userId: 2,
      foodId: 12,
      shelfLife: 10
    },
    {
      userId: 2,
      foodId: 13,
      shelfLife: 11
    },
    {
      userId: 2,
      foodId: 14,
      shelfLife: 4
    }
  ];

  const users_recipes = [
    {
      recipeId: 1,
      userId: 2
    },
    {
      recipeId: 1,
      userId: 1
    },
    {
      recipeId: 2,
      userId: 2
    },
    {
      recipeId: 2,
      userId: 3
    },
    {
      recipeId: 3,
      userId: 1
    }
  ];

  const expirationDates = [
    {
      id: 1,
      name: "Whipped topping",
      keywords: "Whipped topping,topping,tub,whipped",
      life: 420
    },
    {
      id: 2,
      name: "Eggs",
      keywords: "Eggs,raw whites, yolks,egg,whites",
      life: 4
    },
    {
      id: 3,
      name: "Berries",
      keywords:
        "Berries,berry,cherries,cherry,goose berries,goose berry,lychee,gooseberries",
      life: 365
    },
    {
      id: 4,
      name: "Blueberries",
      keywords: "Blueberries,blueberry,berries,berry",
      life: 365
    },
    {
      id: 5,
      name: "Cherimoya",
      keywords: "Cherimoya",
      life: 4
    },
    {
      id: 6,
      name: "Cranberries",
      keywords: "Cranberries,cranberry",
      life: 365
    },
    {
      id: 7,
      name: "Pineapple",
      keywords: "Pineapple",
      life: 7
    },
    {
      id: 8,
      name: "Plantains",
      keywords: "Plantains,plantain",
      life: 5
    },
    {
      id: 9,
      name: "Pomegranate",
      keywords: "Pomegranate",
      life: 365
    },
    {
      id: 10,
      name: "Potatoes",
      keywords: "Potatoes,potato",
      life: 365
    },
    {
      id: 11,
      name: "Nuts",
      keywords: "Nuts,nut,jar,jars,cans,can",
      life: 365
    },
    {
      id: 12,
      name: "Quinoa",
      keywords: "Quinoa,cook,cooked",
      life: 7
    },
    {
      id: 13,
      name: "Star fruit",
      keywords: "Star fruit,fruit,fruits",
      life: 7
    },
    {
      id: 14,
      name: "Prickly pear",
      keywords: "Prickly pear,pear,pickle",
      life: 5
    },
    {
      id: 15,
      name: "Pitaya/dragon fruit",
      keywords: "Pitaya,dragon fruit,fruit,fruits",
      life: 5
    },
    {
      id: 16,
      name: "Strawberries",
      keywords: "Strawberries,strawberry",
      life: 365
    },
    {
      id: 17,
      name: "Raspberries",
      keywords: "Raspberries,raspberry",
      life: 365
    },
    {
      id: 18,
      name: "Kohlrabi",
      keywords: "Kohlrabi",
      life: 365
    },
    {
      id: 19,
      name: "Watermelon",
      keywords: "Watermelon",
      life: 365
    },
    {
      id: 20,
      name: "Cantaloupe",
      keywords: "Cantaloupe",
      life: 365
    },
    {
      id: 21,
      name: "Cherries",
      keywords: "Cherries,cherry",
      life: 365
    },
    {
      id: 22,
      name: "Honeydew",
      keywords: "Honeydew",
      life: 365
    },
    {
      id: 23,
      name: "Flaxseed",
      keywords: "Flaxseed,ground",
      life: 365
    },
    {
      id: 24,
      name: "Canadian bacon",
      keywords: "Canadian bacon,bacon,sliced",
      life: 10
    },
    {
      id: 25,
      name: "Bacon grease",
      keywords: "Bacon grease,bacon,grease",
      life: 180
    },
    {
      id: 26,
      name: "Apple juice",
      keywords: "Apple juice,juice,fresh squeezed,squeezed,juices,apple",
      life: 6
    },
    {
      id: 27,
      name: "Lemon juice",
      keywords: "Lemon juice,juice,fresh squeezed,squeezed,juices",
      life: 6
    },
    {
      id: 28,
      name: "Carrot juice",
      keywords: "Carrot juice,juice,fresh squeezed,squeezed,juices",
      life: 6
    },
    {
      id: 29,
      name: "Coffee",
      keywords: "Coffee,commercial ground, non-vacuum",
      life: 365
    },
    {
      id: 30,
      name: "Puff pastry",
      keywords: "Puff pastry,pastry,pastries,puff",
      life: 365
    },
    {
      id: 31,
      name: "Applesauce",
      keywords: "Applesauce,homemade",
      life: 21
    },
    {
      id: 32,
      name: "Pizza",
      keywords: "Pizza,frozen",
      life: 4
    },
    {
      id: 33,
      name: "Barley",
      keywords: "Barley,whole grain,grain",
      life: 180
    },
    {
      id: 34,
      name: "Farro",
      keywords: "Farro,whole grain,grain",
      life: 180
    },
    {
      id: 35,
      name: "Rye",
      keywords: "Rye,whole grain,grain",
      life: 180
    },
    {
      id: 36,
      name: "Spelt",
      keywords: "Spelt,whole grain,grain",
      life: 180
    },
    {
      id: 37,
      name: "Salsa",
      keywords: "homemade salsa,homemade,salsa",
      life: 7
    },
    {
      id: 38,
      name: "Coconut flour",
      keywords: "coconut flour,coconut,flour",
      life: 365
    },
    {
      id: 39,
      name: "Polenta",
      keywords: "polenta,frozen,frozen polenta",
      life: 365
    },
    {
      id: 40,
      name: "Croutons",
      keywords: "croutons,crouton,bread",
      life: 180
    },
    {
      id: 41,
      name: "Zucchini",
      keywords: "Zucchini,fresh, whole",
      life: 7
    },
    {
      id: 42,
      name: "Stuffed, raw chicken breasts",
      keywords: "Stuffed,raw chicken breasts,breast,chicken,chicken breasts",
      life: 2
    },
    {
      id: 43,
      name: "Hot peppers",
      keywords: "Hot peppers,pepper",
      life: 270
    },
    {
      id: 44,
      name: "Frying oil",
      keywords: "Frying oil,re-used oil,oil",
      life: 30
    },
    {
      id: 45,
      name: "Rabbit",
      keywords: "Rabbit,whole, fresh",
      life: 2
    },
    {
      id: 46,
      name: "Bison",
      keywords: "bison whole,bison,whole",
      life: 5
    },
    {
      id: 47,
      name: "Pine nuts",
      keywords: "pine nuts,pine nut,pine,nut,nuts",
      life: 21
    },
    {
      id: 48,
      name: "Fruit pies",
      keywords:
        "Pies,fruit,pie,apple,apple pie,peach,peach pie,blueberry,blueberry pie,cherry,cherry pie,apricot,apricot pie,blackberry,blackberry pie",
      life: 2
    },
    {
      id: 49,
      name: "Apples",
      keywords: "Apples,apple",
      life: 21
    },
    {
      id: 50,
      name: "Papaya, mango, feijoa, passionfruit, casaha melon",
      keywords:
        "Papaya,mango,feijoa,passionfruit,casaha melon,melon,fruit,passion",
      life: 5
    },
    {
      id: 51,
      name: "Amaranth",
      keywords: "Amaranth,whole grain,grain",
      life: 120
    },
    {
      id: 52,
      name: "Oats",
      keywords: "Oat,Oats,whole grain,grain",
      life: 120
    },
    {
      id: 53,
      name: "Sorghum",
      keywords: "Sorghum,whole grain,grain",
      life: 120
    },
    {
      id: 54,
      name: "Teff",
      keywords: "Teff,whole grain,grain",
      life: 120
    },
    {
      id: 55,
      name: "Cooked poultry dishes",
      keywords: "Cooked poultry dishes,poultry dishes,poultry",
      life: 4
    },
    {
      id: 56,
      name: "Cooked rice",
      keywords: "Cooked rice,rice",
      life: 6
    },
    {
      id: 57,
      name: "Meats",
      keywords: "Meats,gravy,broth,meat",
      life: 4
    },
    {
      id: 58,
      name: "Yeast",
      keywords: "Yeast,packaged",
      life: 180
    },
    {
      id: 59,
      name: "Barley",
      keywords: "Barley,flour, meal",
      life: 90
    },
    {
      id: 60,
      name: "Farro",
      keywords: "Farro,flour, meal",
      life: 90
    },
    {
      id: 61,
      name: "Rye",
      keywords: "Rye,flour, meal",
      life: 90
    },
    {
      id: 62,
      name: "Spelt",
      keywords: "Spelt,flour, meal",
      life: 90
    },
    {
      id: 63,
      name: "Chorizo",
      keywords:
        "smoked chorizo,chorizo,processed chorizo,smoked,processed,cooked,cooked processed chorizo,cooked smoked chorizo",
      life: 365
    },
    {
      id: 64,
      name: "Ham",
      keywords: "ham,uncured,fresh,uncooked,uncured ham,uncured ham uncooked",
      life: 5
    },
    {
      id: 65,
      name: "Bacon",
      keywords:
        "uncured bacon,nitrite-free bacon,natural bacon,uncured,nitrite-free,nitrite,natural,bacon",
      life: 7
    },
    {
      id: 66,
      name: "Raw kabobs with vegetables",
      keywords: "Raw kabobs,vegetables,kabobs,kabob,vegetable",
      life: 2
    },
    {
      id: 67,
      name: "Fried chicken",
      keywords: "Fried chicken,chicken",
      life: 4
    },
    {
      id: 68,
      name: "Crab meat",
      keywords: "Crab meat,meat,fresh,crab",
      life: 3
    },
    {
      id: 69,
      name: "Guacamole",
      keywords: "Guacamole",
      life: 4
    },
    {
      id: 70,
      name: "Crackers",
      keywords: "Crackers,cracker",
      life: 120
    },
    {
      id: 71,
      name: "Amaranth",
      keywords: "Amaranth,flour,meal",
      life: 60
    },
    {
      id: 72,
      name: "Buckwheat",
      keywords: "Buckwheat,whole grain,grain",
      life: 60
    },
    {
      id: 73,
      name: "Millet",
      keywords: "Millet,whole grain,grain",
      life: 60
    },
    {
      id: 74,
      name: "Oats",
      keywords: "Oats,Oat,flour, meal",
      life: 60
    },
    {
      id: 75,
      name: "Sorghum",
      keywords: "Sorghum,flour, meal",
      life: 60
    },
    {
      id: 76,
      name: "Teff",
      keywords: "Teff,flour, meal",
      life: 60
    },
    {
      id: 77,
      name: "Parsley",
      keywords: "parsley",
      life: 3
    },
    {
      id: 78,
      name: "Bison",
      keywords: "ground bison,bison,ground",
      life: 2
    },
    {
      id: 79,
      name: "Cheese Curds",
      keywords: "cheese curd,cheese,curd,curds,cheese curds",
      life: 14
    },
    {
      id: 80,
      name: "Ham",
      keywords:
        "ham,uncured,fresh,cooked,uncured ham,fully cooked,fully cooked uncured ham",
      life: 4
    },
    {
      id: 81,
      name: "Orange juice",
      keywords:
        "Orange juice,orange,juice,freshly squeezed,squeezed,freshly,fresh,sqeeze",
      life: 3
    },
    {
      id: 82,
      name: "Egg dishes",
      keywords: "Egg dishes,egg,dishes",
      life: 4
    },
    {
      id: 83,
      name: "Leftovers",
      keywords: "Leftovers,meat,fish,poultry,egg,leftover",
      life: 4
    },
    {
      id: 84,
      name: "Main dishes or meals",
      keywords: "Main dishes,meals,hot,refrigerated,dishes,dish,meal",
      life: 90
    },
    {
      id: 85,
      name: "Soup, stews",
      keywords: "Soup,stews,stew",
      life: 4
    },
    {
      id: 86,
      name: "Bananas",
      keywords: "Bananas,banana",
      life: 3
    },
    {
      id: 91,
      name: "Whole wheat bread",
      keywords:
        "Whole wheat bread,Whole,wheat,bread,homemade,whole wheat,wheat bread",
      life: 5
    },
    {
      id: 96,
      name: "Chicken broth/stock/consommÃ©",
      keywords: "Chicken broth,chicken stock,consommÃ©,commercially produced",
      life: 7
    },
    {
      id: 101,
      name: "Coconut milk",
      keywords: "coconut milk,coconut,milk,canned,can",
      life: 90
    },
    {
      id: 106,
      name: "Dates",
      keywords: "Dates",
      life: 730
    },
    {
      id: 110,
      name: "Yuzu juice",
      keywords: "yuzu juice,yuzu,juice",
      life: 730
    },
    {
      id: 115,
      name: "Cooked fish",
      keywords: "Cooked fish,fish,all",
      life: 4
    },
    {
      id: 120,
      name: "Pate",
      keywords: "Pate",
      life: 60
    },
    {
      id: 125,
      name: "Millet",
      keywords: "Millet,flour, meal",
      life: 30
    },
    {
      id: 131,
      name: "Kugel",
      keywords: "kugel,commercial,commercial kugel",
      life: 365
    },
    {
      id: 136,
      name: "Kugel",
      keywords: "kugel,homemade,homemade kugel",
      life: 4
    },
    {
      id: 141,
      name: "Avocados",
      keywords: "Avocados,Avocado",
      life: 4
    },
    {
      id: 146,
      name: "Lettuce",
      keywords: "Lettuce,iceberg,romaine",
      life: 5
    },
    {
      id: 151,
      name: "Potato salad",
      keywords: "Potato salad,potato,salad",
      life: 5
    },
    {
      id: 156,
      name: "Ricotta",
      keywords: "Ricotta",
      life: 14
    },
    {
      id: 161,
      name: "Heavy Cream",
      keywords: "Cream,heavy",
      life: 30
    },
    {
      id: 167,
      name: "Flour",
      keywords: "Flour,white",
      life: 365
    },
    {
      id: 172,
      name: "Brussels sprouts",
      keywords: "Brussels sprouts,brussels,sprouts,sprout,brussel",
      life: 4
    },
    {
      id: 177,
      name: "Celery",
      keywords: "Celery",
      life: 14
    },
    {
      id: 182,
      name: "Leeks",
      keywords: "Leeks,leek",
      life: 14
    },
    {
      id: 187,
      name: "Rhubarb",
      keywords: "Rhubarb",
      life: 7
    },
    {
      id: 192,
      name: "Turnips",
      keywords: "Turnips,turnip",
      life: 14
    },
    {
      id: 197,
      name: "Lobster tails",
      keywords: "Lobster tails,tail,lobster,Lobster tail",
      life: 4
    },
    {
      id: 202,
      name: "Soy meat substitutes",
      keywords:
        "Soy meat substitutes,soy,meat,soy meat,meat substitutes,substitutes,substitute",
      life: 4
    },
    {
      id: 207,
      name: "Potatoes",
      keywords: "Potatoes,Potato,instant",
      life: 90
    },
    {
      id: 212,
      name: "Coconut oil",
      keywords: "Coconut oil,coconut,oil",
      life: 1095
    },
    {
      id: 217,
      name: "Powdered milk",
      keywords: "Powdered milk,Powdered,milk,powder",
      life: 1825
    },
    {
      id: 222,
      name: "Basil",
      keywords: "Basil,dried",
      life: 365
    },
    {
      id: 227,
      name: "Thyme",
      keywords: "Thyme",
      life: 14
    },
    {
      id: 232,
      name: "Pure vanilla extract",
      keywords: "vanilla,vanila extract",
      life: 730
    },
    {
      id: 237,
      name: "Quark",
      keywords: "Quark,fresh cheese,cheese",
      life: 10
    },
    {
      id: 242,
      name: "Pate",
      keywords: "Pate,meat",
      life: 7
    },
    {
      id: 247,
      name: "Salsa",
      keywords: "Salsa,fresh",
      life: 7
    },
    {
      id: 252,
      name: "Garam masala",
      keywords: "Garam masala",
      life: 365
    },
    {
      id: 257,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      id: 262,
      name: "Seafood",
      keywords: "canned seafood,seafood,canned",
      life: 365
    },
    {
      id: 267,
      name: "Edamame",
      keywords: "edamame,soybean,soybeans,salted,roasted,dry roasted",
      life: 365
    },
    {
      id: 272,
      name: "Ghee",
      keywords: "ghee,clarified butter,clarified,butter",
      life: 240
    },
    {
      id: 277,
      name: "Celery root",
      keywords: "celeriac,celery root,celery",
      life: 7
    },
    {
      id: 281,
      name: "Arugula",
      keywords: "arugula,greens,salad greens,salad",
      life: 7
    },
    {
      id: 87,
      name: "Bagel",
      keywords: "Bagel,fresh baked,baked",
      life: 2
    },
    {
      id: 92,
      name: "Whole wheat bread",
      keywords:
        "Whole wheat flour,Whole,wheat,flour,wheat flour,whole wheat,commercially baked,pre sliced,sliced,slice,baked,commercially,commercial",
      life: 5
    },
    {
      id: 97,
      name: "Baby carrots",
      keywords: "Baby carrots, carrot,baby carrot",
      life: 90
    },
    {
      id: 102,
      name: "Vegetable soup",
      keywords: "vegetable soup,vegetable,soup",
      life: 4
    },
    {
      id: 107,
      name: "Coffee",
      keywords: "Coffee,home ground,non vacuum,ground,home,vacuum",
      life: 730
    },
    {
      id: 112,
      name: "Cream",
      keywords: "Cream,whipped, sweetened",
      life: 1
    },
    {
      id: 117,
      name: "Leftovers",
      keywords: "Leftovers,pizza",
      life: 4
    },
    {
      id: 122,
      name: "Fresh pasta",
      keywords: "Fresh pasta,pasta",
      life: 2
    },
    {
      id: 126,
      name: "Chorizo",
      keywords: "fresh chorizo,chorizo",
      life: 2
    },
    {
      id: 130,
      name: "Tamarind",
      keywords: "Tamarind",
      life: 365
    },
    {
      id: 135,
      name: "Pesto",
      keywords: "Pesto,jarred,jar",
      life: 30
    },
    {
      id: 140,
      name: "Apricots",
      keywords: "Apricots,Apricot",
      life: 5
    },
    {
      id: 145,
      name: "Cucumbers",
      keywords: "Cucumbers,cucumber",
      life: 7
    },
    {
      id: 150,
      name: "Egg salad",
      keywords: "Egg salad,egg,salad",
      life: 4
    },
    {
      id: 155,
      name: "Pasta salad",
      keywords: "Pasta salad,pasta,salad",
      life: 5
    },
    {
      id: 160,
      name: "Half and Half",
      keywords: "Cream,half",
      life: 7
    },
    {
      id: 165,
      name: "Re-hydrated textured soy protein",
      keywords:
        "Re hydrated textured soy protein,protein,TSP,soy,soy protein,textured soy protein,Re hydrated",
      life: 4
    },
    {
      id: 169,
      name: "Beets",
      keywords: "Beets",
      life: 4
    },
    {
      id: 174,
      name: "Carrots",
      keywords: "Carrots,carrot",
      life: 30
    },
    {
      id: 179,
      name: "Eggplant",
      keywords: "Eggplant,egg",
      life: 10
    },
    {
      id: 184,
      name: "Onions",
      keywords: "Onions,yellow,white,red,onion",
      life: 90
    },
    {
      id: 189,
      name: "Zucchini",
      keywords: "Squash,summer,zucchini",
      life: 4
    },
    {
      id: 193,
      name: "Dough",
      keywords: "Dough,commercial,bread,cookie",
      life: 4
    },
    {
      id: 198,
      name: "Sausages",
      keywords: "Sausages,Sausage,uncooked,cooked",
      life: 4
    },
    {
      id: 203,
      name: "Tempeh",
      keywords: "Tempeh",
      life: 4
    },
    {
      id: 208,
      name: "Yams/sweet potatoes",
      keywords: "Yams,sweet potatoes,potatoes,potato,yam",
      life: 7
    },
    {
      id: 213,
      name: "Roasted red peppers",
      keywords:
        "Roasted red peppers,roasted,red,peppers,jar,Roasted red,red peppers,pepper",
      life: 180
    },
    {
      id: 218,
      name: "Almond butter",
      keywords: "Almond butter,Almond,butter",
      life: 365
    },
    {
      id: 224,
      name: "Oregano",
      keywords: "Oregano",
      life: 14
    },
    {
      id: 229,
      name: "Almond extract",
      keywords: "Almond extract",
      life: 730
    },
    {
      id: 233,
      name: "Coconut flavor",
      keywords: "Coconut flavor,coconut",
      life: 730
    },
    {
      id: 238,
      name: "Swiss chard",
      keywords: "Swiss chard,chard",
      life: 10
    },
    {
      id: 243,
      name: "Pate",
      keywords: "Pate,poultry",
      life: 7
    },
    {
      id: 248,
      name: "Chia seeds",
      keywords: "Chia seeds,chia,seed,seeds",
      life: 540
    },
    {
      id: 253,
      name: "Cherry tomatoes",
      keywords: "Cherry, tomatoes,tomato",
      life: 10
    },
    {
      id: 258,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      id: 263,
      name: "Salad dressing",
      keywords: "salad dressing,vinaigrette,salad,dressing,homemade",
      life: 21
    },
    {
      id: 268,
      name: "Breadcrumbs",
      keywords: "breadcrumbs,breadcrumb",
      life: 180
    },
    {
      id: 273,
      name: "Corn syrup",
      keywords: "corn syrup,corn,syrup",
      life: 1095
    },
    {
      id: 278,
      name: "Pastrami",
      keywords: "pastrami",
      life: 40
    },
    {
      id: 283,
      name: "Mung bean",
      keywords:
        "mung beans,mung bean,mung,bean,dry mung beans,dry,vacuum sealed,vacuum sealed mung beans",
      life: 3650
    },
    {
      id: 88,
      name: "Bagel",
      keywords: "Bagel,commercially frozen,frozen",
      life: 90
    },
    {
      id: 93,
      name: "Broth",
      keywords: "Broth,homemade",
      life: 4
    },
    {
      id: 98,
      name: "Tomato paste",
      keywords: "Tomato paste",
      life: 90
    },
    {
      id: 104,
      name: "Bratwurst",
      keywords: "fresh brautwurst,brautwurst,fresh",
      life: 3
    },
    {
      id: 109,
      name: "Pecans",
      keywords: "chopped pecans,pecan,pecans,chopped",
      life: 365
    },
    {
      id: 114,
      name: "Poultry pieces",
      keywords: "Poultry pieces,gravy,broth,poultry,pieces,piece",
      life: 4
    },
    {
      id: 119,
      name: "Luncheon meat or poultry",
      keywords: "Luncheon meat,poultry,store sliced,meat,luncheon,store,sliced",
      life: 60
    },
    {
      id: 123,
      name: "Canadian bacon",
      keywords: "Canadian bacon,bacon,whole",
      life: 14
    },
    {
      id: 128,
      name: "Anchovies",
      keywords: "anchovies,anchovy,canned anchovies",
      life: 60
    },
    {
      id: 133,
      name: "Grapes",
      keywords: "Grapes,grape",
      life: 30
    },
    {
      id: 138,
      name: "Eggs",
      keywords: "Eggs,egg,hard boiled cooked,boiled,hard boiled",
      life: 7
    },
    {
      id: 143,
      name: "Kiwi fruit",
      keywords: "Kiwi fruit,kiwi,fruit",
      life: 6
    },
    {
      id: 148,
      name: "Radishes",
      keywords: "Radishes,radish",
      life: 14
    },
    {
      id: 153,
      name: "Chicken salad",
      keywords: "Chicken salad,chicken,salad",
      life: 4
    },
    {
      id: 158,
      name: "Apple cider",
      keywords: "apple cider,apple,cider",
      life: 21
    },
    {
      id: 163,
      name: "Cooked shellfish",
      keywords: "Cooked shellfish,shellfish,fish,cooked",
      life: 4
    },
    {
      id: 168,
      name: "Asparagus",
      keywords: "Asparagus",
      life: 4
    },
    {
      id: 173,
      name: "Cabbage",
      keywords: "Cabbage",
      life: 60
    },
    {
      id: 178,
      name: "Corn on the cob",
      keywords: "Corn,cob",
      life: 3
    },
    {
      id: 183,
      name: "Okra",
      keywords: "Okra",
      life: 3
    },
    {
      id: 188,
      name: "Rutabagas",
      keywords: "Rutabagas",
      life: 120
    },
    {
      id: 194,
      name: "Egg substitutes",
      keywords: "Egg substitutes,egg,substitute,Egg substitute",
      life: 4
    },
    {
      id: 199,
      name: "Sausages",
      keywords: "Sausages,Sausage,precooked,cooked",
      life: 4
    },
    {
      id: 204,
      name: "Vegetables",
      keywords: "Vegetables,vegetable",
      life: 4
    },
    {
      id: 210,
      name: "Fruit cocktail",
      keywords: "Fruit cocktail,cocktail,fruit,canned,can",
      life: 540
    },
    {
      id: 215,
      name: "White wine",
      keywords: "White wine,white,wine",
      life: 730
    },
    {
      id: 220,
      name: "Cilantro",
      keywords: "Cilantro",
      life: 14
    },
    {
      id: 225,
      name: "Rosemary",
      keywords: "Rosemary",
      life: 14
    },
    {
      id: 230,
      name: "Cinnamon extract",
      keywords: "Cinnamon extract",
      life: 730
    },
    {
      id: 236,
      name: "Cream liquors",
      keywords: "Cream liquors,liquors,unopened,liquor",
      life: 240
    },
    {
      id: 241,
      name: "Hot sauce",
      keywords: "Hot sauce,sauce",
      life: 180
    },
    {
      id: 246,
      name: "Marinated vegetables",
      keywords: "Marinated vegetables,vegetables,oil,vegetable",
      life: 4
    },
    {
      id: 251,
      name: "Spaghetti squash",
      keywords: "Spaghetti squash,squash,cut",
      life: 5
    },
    {
      id: 256,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      id: 261,
      name: "Tuna",
      keywords: "canned tuna,tuna,canned",
      life: 1095
    },
    {
      id: 266,
      name: "Edamame",
      keywords: "edamame,fresh,fresh edamame,soybeans,soybean",
      life: 5
    },
    {
      id: 271,
      name: "Tomato Sauce",
      keywords:
        "homemade tomato sauce,homemade sauce,homemade spaghetti sauce,spaghetti sauce,tomato sauce,homemade",
      life: 365
    },
    {
      id: 276,
      name: "Milk",
      keywords: "ultra pasteurized milk,milk,pasteurized,ultra",
      life: 90
    },
    {
      id: 282,
      name: "Mung bean",
      keywords:
        "sprouted mung beans,sprouted mung bean,sprout,mung beans,mung bean,mung,bean,mungbean,sprouts",
      life: 42
    },
    {
      id: 89,
      name: "Muffin",
      keywords:
        "Muffin,homemade including bran,homemade,bran,blueberry,banana,corn,chocolate chip,including bran,chocolate,chip",
      life: 7
    },
    {
      id: 94,
      name: "Beef broth/stock/consommÃ©",
      keywords:
        "Beef broth, beef stock,beef consommÃ©,consommÃ©,commercially produced",
      life: 7
    },
    {
      id: 99,
      name: "Macaroons",
      keywords: "Macaroons,Macaroon,french",
      life: 2
    },
    {
      id: 103,
      name: "Cinnamon rolls",
      keywords: "cinnamon rolls,cinnamon roll,cinnamon,roll,rolls",
      life: 3
    },
    {
      id: 108,
      name: "Whole wheat flour",
      keywords: "Whole wheat flour,Whole,wheat,flour,wheat flour,whole wheat",
      life: 365
    },
    {
      id: 113,
      name: "Yogurt",
      keywords: "Yogurt",
      life: 60
    },
    {
      id: 118,
      name: "Cooked pasta",
      keywords: "Cooked pasta,pasta",
      life: 5
    },
    {
      id: 124,
      name: "Buckwheat",
      keywords: "Buckwheat,flour, meal,meal",
      life: 30
    },
    {
      id: 129,
      name: "Coconut",
      keywords: "Coconut,shredded",
      life: 365
    },
    {
      id: 134,
      name: "Melons",
      keywords: "Melons,melon",
      life: 30
    },
    {
      id: 139,
      name: "Hummus",
      keywords:
        "Hummus,traditional,no preservatives,not pasteurized,no preservative,preservatives,preservative,pasteurized",
      life: 7
    },
    {
      id: 144,
      name: "Artichokes, whole",
      keywords: "Artichokes,artichoke,whole",
      life: 7
    },
    {
      id: 149,
      name: "Bagged greens",
      keywords: "Bagged greens,leaf,spinach,lettuce,bagged,greens,green",
      life: 5
    },
    {
      id: 154,
      name: "Ham salad",
      keywords: "Ham salad,ham,salad",
      life: 4
    },
    {
      id: 159,
      name: "Yuzu",
      keywords: "yuzu,yuzu fruit",
      life: 7
    },
    {
      id: 164,
      name: "Tofu",
      keywords: "Tofu",
      life: 4
    },
    {
      id: 170,
      name: "Bok choy",
      keywords: "Bok choy",
      life: 4
    },
    {
      id: 175,
      name: "Parsnips",
      keywords: "parsnips,parsnip",
      life: 21
    },
    {
      id: 180,
      name: "Garlic",
      keywords: "Garlic",
      life: 180
    },
    {
      id: 185,
      name: "Green Onions",
      keywords: "Onions,spring,green,onion",
      life: 14
    },
    {
      id: 190,
      name: "Winter Squash",
      keywords: "Squash,winter",
      life: 5
    },
    {
      id: 195,
      name: "Fish",
      keywords: "Fish,raw,headed,gutted",
      life: 4
    },
    {
      id: 200,
      name: "Shrimp, shellfish",
      keywords: "Shrimp,shellfish,fish",
      life: 4
    },
    {
      id: 205,
      name: "Dry gravy mixes",
      keywords: "Dry gravy mixes,gravy,mixes,mix,dry",
      life: 2
    },
    {
      id: 209,
      name: "Kale",
      keywords: "Kale",
      life: 7
    },
    {
      id: 214,
      name: "Red wine",
      keywords: "Red wine,red,wine",
      life: 1825
    },
    {
      id: 219,
      name: "Cashew butter",
      keywords: "Cashew butter,Cashew,butter",
      life: 90
    },
    {
      id: 223,
      name: "Basil",
      keywords: "Basil,fresh",
      life: 5
    },
    {
      id: 228,
      name: "Duck fat",
      keywords: "Duck fat,duck",
      life: 30
    },
    {
      id: 234,
      name: "Butter flavor",
      keywords: "Butter flavor,butter",
      life: 730
    },
    {
      id: 239,
      name: "Granola",
      keywords: "Granola",
      life: 270
    },
    {
      id: 244,
      name: "Cranberry sauce",
      keywords: "Cranberry sauce,sauce,homemade",
      life: 10
    },
    {
      id: 249,
      name: "Bread",
      keywords: "Bread,Breads,homemade",
      life: 5
    },
    {
      id: 254,
      name: "Coleslaw",
      keywords:
        "coleslaw,homemade,homemade coleslaw,prepared,prepared coleslaw",
      life: 5
    },
    {
      id: 259,
      name: "Sunflower seeds",
      keywords: "sunflower,sunflower seed,sunflower seeds,seed,seeds",
      life: 365
    },
    {
      id: 264,
      name: "Beets",
      keywords: "pickled beets,beets,pickled",
      life: 365
    },
    {
      id: 269,
      name: "Salsa",
      keywords: "homemade salsa,homemade,salsa",
      life: 365
    },
    {
      id: 274,
      name: "Instant breakfast drinks",
      keywords:
        "instant breakfast drinks,instant,breakfast,drinks,instant breakfast,instant drink,carnation,bottled instant breakfast drink,bottled instant breakfast,bottled breakfast",
      life: 180
    },
    {
      id: 279,
      name: "Aioli",
      keywords:
        "garlic aioli,aioli,garlic,mayonnaise,mayo,garlic mayo,garlic mayonnaise,mayo",
      life: 4
    },
    {
      id: 90,
      name: "Muffin",
      keywords: "Muffin,commercially packaged,packaged",
      life: 7
    },
    {
      id: 95,
      name: "Vegetable stock/broth",
      keywords:
        "Vegetable stock,Vegetable broth,broth,commercial vegetable stock,commercial vegetable broth,vegetable",
      life: 7
    },
    {
      id: 100,
      name: "Coconut cream",
      keywords: "coconut cream,coconut,cream,canned,can",
      life: 90
    },
    {
      id: 105,
      name: "Bratwurst",
      keywords:
        "smoked brautwurst,processed brautwurst,bratwurst,smoked,processed",
      life: 7
    },
    {
      id: 111,
      name: "Mustard",
      keywords: "mustard,dried mustard,ground mustard,dried ground mustard",
      life: 180
    },
    {
      id: 116,
      name: "Leftovers",
      keywords:
        "leftover,leftovers,without meat,fish,poultry,egg,cooked vegetables,rice,potatoes,meat,vegetables,potato,vegetable",
      life: 4
    },
    {
      id: 121,
      name: "Peaches, nectarines, plums, pears, sapote",
      keywords:
        "Peaches,nectarines,plums,pears,sapote,peach,nectarine,plum,pear",
      life: 5
    },
    {
      id: 127,
      name: "Chorizo",
      keywords:
        "smoked chorizo,chorizo,processed chorizo,smoked,processed,uncooked,uncooked processed chorizo,uncooked smoked chorizo",
      life: 7
    },
    {
      id: 132,
      name: "Mung bean",
      keywords:
        "mung beans,mung bean,mung,bean,dry mung beans,dry,bag,bagged mung beans",
      life: 365
    },
    {
      id: 137,
      name: "Prosciutto",
      keywords: "prosciutto",
      life: 90
    },
    {
      id: 142,
      name: "Guava",
      keywords: "Guava",
      life: 4
    },
    {
      id: 147,
      name: "Spinach",
      keywords: "Lettuce,leaf,spinach",
      life: 5
    },
    {
      id: 152,
      name: "Seafood salads",
      keywords:
        "Seafood salads,tuna salad, shrimp salad, salmon salad, mixed seafood salad,seafood,salads,salad,tuna,shrimp,salmon,mixed,mixed seafood,seafood salad,",
      life: 4
    },
    {
      id: 157,
      name: "Milk",
      keywords: "Milk,lactose,lactose-free",
      life: 7
    },
    {
      id: 162,
      name: "Jerky",
      keywords: "Jerky,homemade",
      life: 60
    },
    {
      id: 166,
      name: "Casseroles",
      keywords: "Casseroles,Casserole",
      life: 4
    },
    {
      id: 171,
      name: "Broccoli and broccoli raab (rapini)",
      keywords: "Broccoli,broccoli raab,rapini,raab",
      life: 4
    },
    {
      id: 176,
      name: "Cauliflower",
      keywords: "Cauliflower",
      life: 14
    },
    {
      id: 181,
      name: "Ginger root",
      keywords: "Ginger root,ginger,root",
      life: 30
    },
    {
      id: 186,
      name: "Pumpkins",
      keywords: "Pumpkins,pumpkin",
      life: 90
    },
    {
      id: 191,
      name: "Tomatoes",
      keywords: "Tomatoes,tomato",
      life: 7
    },
    {
      id: 196,
      name: "Frozen pretzels",
      keywords: "Frozen pretzels,frozen,pretzels,pretzel",
      life: 4
    },
    {
      id: 201,
      name: "Soy crumbles and hot dogs",
      keywords: "Soy crumbles,hot dogs,hot dog,soy,soy crumble",
      life: 4
    },
    {
      id: 206,
      name: "Mushrooms",
      keywords: "Mushrooms,Mushroom,dried",
      life: 14
    },
    {
      id: 211,
      name: "Muffin",
      keywords:
        "Muffin,mix,dry,commercially packaged,packaged,commercially,commercial",
      life: 270
    },
    {
      id: 216,
      name: "Dry stuffing mix",
      keywords:
        "Dry stuffing mix,Dry stuffing,stuffing mix,Dry,stuffing,mix,commercially packaged,packaged,commercially,commercial,pack",
      life: 365
    },
    {
      id: 221,
      name: "Mint",
      keywords: "Mint",
      life: 14
    },
    {
      id: 226,
      name: "Chives",
      keywords: "Chives",
      life: 14
    },
    {
      id: 231,
      name: "Lemon extract",
      keywords: "Lemon extract,lemon",
      life: 730
    },
    {
      id: 235,
      name: "Genuine Maple syrup",
      keywords: "Genuine Maple syrup,syrup,unopened, plastic",
      life: 730
    },
    {
      id: 240,
      name: "Pork rinds",
      keywords: "Pork rinds,pork,rinds",
      life: 120
    },
    {
      id: 245,
      name: "Vegetable juice",
      keywords: "Vegetable juice,commercial,refrigerated,vegetable",
      life: 30
    },
    {
      id: 250,
      name: "Spaghetti squash",
      keywords: "Spaghetti squash,squash,whole",
      life: 14
    },
    {
      id: 255,
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      id: 260,
      name: "Sesame seeds",
      keywords: "sesame seeds,sesame,seeds,seed",
      life: 1825
    },
    {
      id: 265,
      name: "Bulgur",
      keywords: "bulgur",
      life: 365
    },
    {
      id: 270,
      name: "Barbecue Sauce",
      keywords:
        "homemade barbecue sauce,homemade sauce,homemade BBQ sauce,BBQ sauce,barbecue sauce",
      life: 365
    },
    {
      id: 275,
      name: "Cereal or granola bars",
      keywords:
        "bars,bar,granola bars,granola bar,granola,cereal bars,cereal bar,nutrition bars,nutrition bar,energy bars,energy bar,health bars,health bar,fruit bars,fruit bar,snack bars,snack barsnack,nut bars,nut bar,seed bars,seed bar,crunchy bars,crunchy bar,breakfast,breakfast bar,breakfast bars",
      life: 365
    },
    {
      id: 280,
      name: "Radicchio",
      keywords: "radicchio",
      life: 21
    }
  ];

  await Promise.all(
    expirationDates.map(food => {
      return ExpirationDate.create(food);
    })
  );

  console.log(`seeded ${expirationDates.length} expiration dates`);

  await Promise.all(
    food.map(item => {
      return Food.create(item);
    })
  );

  console.log(`seeded ${food.length} foods`);

  await Promise.all(
    recipes.map(recipe => {
      return Recipe.create(recipe);
    })
  );

  console.log(`seeded ${recipes.length} recipes`);

  await Promise.all(
    users.map(user => {
      return User.create(user);
    })
  );

  console.log(`seeded ${users.length} users`);

  await Promise.all(
    user_foods.map(food => {
      return UserFood.create(food);
    })
  );

  await Promise.all(
    users_recipes.map(recipe => {
      return UserRecipe.create(recipe);
    })
  );

  console.log(`seeded ${users_recipes.length} users_recipes`);

  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
