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
      name: "mac n cheese",
      url:
        "https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/",
      apiId: 1,
      imgUrl:
        "https://www.foodiecrush.com/wp-content/uploads/2017/10/Instant-Pot-Macaroni-and-Cheese-foodiecrush.com-019.jpg"
    },
    {
      name: "apple-pie",
      url:
        "https://www.momontimeout.com/best-homemade-baked-mac-and-cheese-recipe/",
      apiId: 2,
      imgUrl:
        "https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg"
    }
  ];
  const food = [
    {
      name: "orange"
    },
    {
      name: "apple",
      expirationDateId: 51
    },
    {
      name: "potato",
      expirationDateId: 11
    },
    {
      name: "carrot juice",
      expirationDateId: 30
    },
    {
      name: "barley",
      expirationDateId: 33
    },
    {
      name: "polenta",
      expirationDateId: 39
    },
    {
      name: "zucchini",
      expirationDateId: 42
    },
    {
      name: "bison",
      expirationDateId: 47
    },
    {
      name: "bacon",
      expirationDateId: 67
    },
    {
      name: "bananas",
      expirationDateId: 89,
      imageUrl: "https://spoonacular.com/cdn/ingredients_250x250/bananas.jpg"
    },
    {
      name: "grapes",
      expirationDateId: 139
    },
    {
      name: "lettuce",
      expirationDateId: 157
    },
    {
      name: "avocado",
      expirationDateId: 152
    },
    {
      name: "cucumber",
      expirationDateId: 155
    },
    {
      name: "pasta salad",
      expirationDateId: 167
    }
  ];

  const user_foods = [
    {
      startDate: new Date("11/17/19"),
      userId: 1,
      foodId: 2
    },
    {
      startDate: new Date("11/23/19"),
      userId: 2,
      foodId: 1,
      status: "Eaten"
    },
    {
      startDate: new Date("11/20/19"),
      userId: 2,
      foodId: 2,
      status: "Eaten"
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 3,
      status: "Eaten"
    },
    {
      startDate: new Date("11/25/19"),
      userId: 2,
      foodId: 4,
      status: "Eaten"
    },
    {
      startDate: new Date("11/21/19"),
      userId: 2,
      foodId: 5,
      status: "Thrown Away"
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 6,
      status: "Thrown Away"
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 7,
      status: "Thrown Away"
    },
    {
      startDate: new Date("11/20/19"),
      userId: 2,
      foodId: 8,
      status: "Thrown Away"
    },
    {
      startDate: new Date("11/17/19"),
      userId: 2,
      foodId: 9,
      status: "Thrown Away"
    },
    {
      startDate: new Date("11/10/19"),
      userId: 2,
      foodId: 10
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 11
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 12
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 13
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 14
    },
    {
      startDate: new Date("11/24/19"),
      userId: 2,
      foodId: 15
    }
  ];

  const users_recipes = [
    {
      recipeId: 1,
      userId: 2
    },
    {
      recipeId: 2,
      userId: 1
    }
  ];

  const expirationDates = [
    {
      name: "Whipped topping",
      keywords: "Whipped topping,topping,tub,whipped",
      life: 420
    },
    {
      name: "Eggs",
      keywords: "Eggs,raw whites, yolks,egg,whites",
      life: 4
    },
    {
      name: "Berries",
      keywords:
        "Berries,berry,cherries,cherry,goose berries,goose berry,lychee,gooseberries",
      life: 365
    },
    {
      name: "Blueberries",
      keywords: "Blueberries,blueberry,berries,berry",
      life: 365
    },
    {
      name: "Cherimoya",
      keywords: "Cherimoya",
      life: 4
    },
    {
      name: "Cranberries",
      keywords: "Cranberries,cranberry",
      life: 365
    },
    {
      name: "Pineapple",
      keywords: "Pineapple",
      life: 7
    },
    {
      name: "Plantains",
      keywords: "Plantains,plantain",
      life: 5
    },
    {
      name: "Pomegranate",
      keywords: "Pomegranate",
      life: 365
    },
    {
      name: "Potatoes",
      keywords: "Potatoes,potato",
      life: 365
    },
    {
      name: "Nuts",
      keywords: "Nuts,nut,jar,jars,cans,can",
      life: 365
    },
    {
      name: "Quinoa",
      keywords: "Quinoa,cook,cooked",
      life: 7
    },
    {
      name: "Star fruit",
      keywords: "Star fruit,fruit,fruits",
      life: 7
    },
    {
      name: "Prickly pear",
      keywords: "Prickly pear,pear,pickle",
      life: 5
    },
    {
      name: "Pitaya/dragon fruit",
      keywords: "Pitaya,dragon fruit,fruit,fruits",
      life: 5
    },
    {
      name: "Strawberries",
      keywords: "Strawberries,strawberry",
      life: 365
    },
    {
      name: "Raspberries",
      keywords: "Raspberries,raspberry",
      life: 365
    },
    {
      name: "Kohlrabi",
      keywords: "Kohlrabi",
      life: 365
    },
    {
      name: "Watermelon",
      keywords: "Watermelon",
      life: 365
    },
    {
      name: "Cantaloupe",
      keywords: "Cantaloupe",
      life: 365
    },
    {
      name: "Cherries",
      keywords: "Cherries,cherry",
      life: 365
    },
    {
      name: "Honeydew",
      keywords: "Honeydew",
      life: 365
    },
    {
      name: "Flaxseed",
      keywords: "Flaxseed,ground",
      life: 365
    },
    {
      name: "Canadian bacon",
      keywords: "Canadian bacon,bacon,sliced",
      life: 10
    },
    {
      name: "Bacon grease",
      keywords: "Bacon grease,bacon,grease",
      life: 180
    },
    {
      name: "Apple juice",
      keywords: "Apple juice,juice,fresh squeezed,squeezed,juices,apple",
      life: 6
    },
    {
      name: "Lemon juice",
      keywords: "Lemon juice,juice,fresh squeezed,squeezed,juices",
      life: 6
    },
    {
      name: "Carrot juice",
      keywords: "Carrot juice,juice,fresh squeezed,squeezed,juices",
      life: 6
    },
    {
      name: "Coffee",
      keywords: "Coffee,commercial ground, non-vacuum",
      life: 365
    },
    {
      name: "Puff pastry",
      keywords: "Puff pastry,pastry,pastries,puff",
      life: 365
    },
    {
      name: "Applesauce",
      keywords: "Applesauce,homemade",
      life: 21
    },
    {
      name: "Pizza",
      keywords: "Pizza,frozen",
      life: 4
    },
    {
      name: "Barley",
      keywords: "Barley,whole grain,grain",
      life: 180
    },
    {
      name: "Farro",
      keywords: "Farro,whole grain,grain",
      life: 180
    },
    {
      name: "Rye",
      keywords: "Rye,whole grain,grain",
      life: 180
    },
    {
      name: "Spelt",
      keywords: "Spelt,whole grain,grain",
      life: 180
    },
    {
      name: "Salsa",
      keywords: "homemade salsa,homemade,salsa",
      life: 7
    },
    {
      name: "Coconut flour",
      keywords: "coconut flour,coconut,flour",
      life: 365
    },
    {
      name: "Polenta",
      keywords: "polenta,frozen,frozen polenta",
      life: 365
    },
    {
      name: "Croutons",
      keywords: "croutons,crouton,bread",
      life: 180
    },
    {
      name: "Zucchini",
      keywords: "Zucchini,fresh, whole",
      life: 7
    },
    {
      name: "Stuffed, raw chicken breasts",
      keywords: "Stuffed,raw chicken breasts,breast,chicken,chicken breasts",
      life: 2
    },
    {
      name: "Hot peppers",
      keywords: "Hot peppers,pepper",
      life: 270
    },
    {
      name: "Frying oil",
      keywords: "Frying oil,re-used oil,oil",
      life: 30
    },
    {
      name: "Rabbit",
      keywords: "Rabbit,whole, fresh",
      life: 2
    },
    {
      name: "Bison",
      keywords: "bison whole,bison,whole",
      life: 5
    },
    {
      name: "Pine nuts",
      keywords: "pine nuts,pine nut,pine,nut,nuts",
      life: 21
    },
    {
      name: "Fruit pies",
      keywords:
        "Pies,fruit,pie,apple,apple pie,peach,peach pie,blueberry,blueberry pie,cherry,cherry pie,apricot,apricot pie,blackberry,blackberry pie",
      life: 2
    },
    {
      name: "Apples",
      keywords: "Apples,apple",
      life: 21
    },
    {
      name: "Papaya, mango, feijoa, passionfruit, casaha melon",
      keywords:
        "Papaya,mango,feijoa,passionfruit,casaha melon,melon,fruit,passion",
      life: 5
    },
    {
      name: "Amaranth",
      keywords: "Amaranth,whole grain,grain",
      life: 120
    },
    {
      name: "Oats",
      keywords: "Oat,Oats,whole grain,grain",
      life: 120
    },
    {
      name: "Sorghum",
      keywords: "Sorghum,whole grain,grain",
      life: 120
    },
    {
      name: "Teff",
      keywords: "Teff,whole grain,grain",
      life: 120
    },
    {
      name: "Cooked poultry dishes",
      keywords: "Cooked poultry dishes,poultry dishes,poultry",
      life: 4
    },
    {
      name: "Cooked rice",
      keywords: "Cooked rice,rice",
      life: 6
    },
    {
      name: "Meats",
      keywords: "Meats,gravy,broth,meat",
      life: 4
    },
    {
      name: "Yeast",
      keywords: "Yeast,packaged",
      life: 180
    },
    {
      name: "Barley",
      keywords: "Barley,flour, meal",
      life: 90
    },
    {
      name: "Farro",
      keywords: "Farro,flour, meal",
      life: 90
    },
    {
      name: "Rye",
      keywords: "Rye,flour, meal",
      life: 90
    },
    {
      name: "Spelt",
      keywords: "Spelt,flour, meal",
      life: 90
    },
    {
      name: "Chorizo",
      keywords:
        "smoked chorizo,chorizo,processed chorizo,smoked,processed,cooked,cooked processed chorizo,cooked smoked chorizo",
      life: 365
    },
    {
      name: "Ham",
      keywords: "ham,uncured,fresh,uncooked,uncured ham,uncured ham uncooked",
      life: 5
    },
    {
      name: "Bacon",
      keywords:
        "uncured bacon,nitrite-free bacon,natural bacon,uncured,nitrite-free,nitrite,natural,bacon",
      life: 7
    },
    {
      name: "Raw kabobs with vegetables",
      keywords: "Raw kabobs,vegetables,kabobs,kabob,vegetable",
      life: 2
    },
    {
      name: "Fried chicken",
      keywords: "Fried chicken,chicken",
      life: 4
    },
    {
      name: "Crab meat",
      keywords: "Crab meat,meat,fresh,crab",
      life: 3
    },
    {
      name: "Guacamole",
      keywords: "Guacamole",
      life: 4
    },
    {
      name: "Crackers",
      keywords: "Crackers,cracker",
      life: 120
    },
    {
      name: "Amaranth",
      keywords: "Amaranth,flour,meal",
      life: 60
    },
    {
      name: "Buckwheat",
      keywords: "Buckwheat,whole grain,grain",
      life: 60
    },
    {
      name: "Millet",
      keywords: "Millet,whole grain,grain",
      life: 60
    },
    {
      name: "Oats",
      keywords: "Oats,Oat,flour, meal",
      life: 60
    },
    {
      name: "Sorghum",
      keywords: "Sorghum,flour, meal",
      life: 60
    },
    {
      name: "Teff",
      keywords: "Teff,flour, meal",
      life: 60
    },
    {
      name: "Parsley",
      keywords: "parsley",
      life: 3
    },
    {
      name: "Bison",
      keywords: "ground bison,bison,ground",
      life: 2
    },
    {
      name: "Cheese Curds",
      keywords: "cheese curd,cheese,curd,curds,cheese curds",
      life: 14
    },
    {
      name: "Ham",
      keywords:
        "ham,uncured,fresh,cooked,uncured ham,fully cooked,fully cooked uncured ham",
      life: 4
    },
    {
      name: "Orange juice",
      keywords:
        "Orange juice,orange,juice,freshly squeezed,squeezed,freshly,fresh,sqeeze",
      life: 3
    },
    {
      name: "Egg dishes",
      keywords: "Egg dishes,egg,dishes",
      life: 4
    },
    {
      name: "Leftovers",
      keywords: "Leftovers,meat,fish,poultry,egg,leftover",
      life: 4
    },
    {
      name: "Main dishes or meals",
      keywords: "Main dishes,meals,hot,refrigerated,dishes,dish,meal",
      life: 90
    },
    {
      name: "Soup, stews",
      keywords: "Soup,stews,stew",
      life: 4
    },
    {
      name: "Bananas",
      keywords: "Bananas,banana",
      life: 3
    },
    {
      name: "Bagel",
      keywords: "Bagel,fresh baked,baked",
      life: 2
    },
    {
      name: "Bagel",
      keywords: "Bagel,commercially frozen,frozen",
      life: 90
    },
    {
      name: "Muffin",
      keywords:
        "Muffin,homemade including bran,homemade,bran,blueberry,banana,corn,chocolate chip,including bran,chocolate,chip",
      life: 7
    },
    {
      name: "Muffin",
      keywords: "Muffin,commercially packaged,packaged",
      life: 7
    },
    {
      name: "Whole wheat bread",
      keywords:
        "Whole wheat bread,Whole,wheat,bread,homemade,whole wheat,wheat bread",
      life: 5
    },
    {
      name: "Whole wheat bread",
      keywords:
        "Whole wheat flour,Whole,wheat,flour,wheat flour,whole wheat,commercially baked,pre sliced,sliced,slice,baked,commercially,commercial",
      life: 5
    },
    {
      name: "Broth",
      keywords: "Broth,homemade",
      life: 4
    },
    {
      name: "Beef broth/stock/consommÃ©",
      keywords:
        "Beef broth, beef stock,beef consommÃ©,consommÃ©,commercially produced",
      life: 7
    },
    {
      name: "Vegetable stock/broth",
      keywords:
        "Vegetable stock,Vegetable broth,broth,commercial vegetable stock,commercial vegetable broth,vegetable",
      life: 7
    },
    {
      name: "Chicken broth/stock/consommÃ©",
      keywords: "Chicken broth,chicken stock,consommÃ©,commercially produced",
      life: 7
    },
    {
      name: "Baby carrots",
      keywords: "Baby carrots, carrot,baby carrot",
      life: 90
    },
    {
      name: "Tomato paste",
      keywords: "Tomato paste",
      life: 90
    },
    {
      name: "Macaroons",
      keywords: "Macaroons,Macaroon,french",
      life: 2
    },
    {
      name: "Coconut cream",
      keywords: "coconut cream,coconut,cream,canned,can",
      life: 90
    },
    {
      name: "Coconut milk",
      keywords: "coconut milk,coconut,milk,canned,can",
      life: 90
    },
    {
      name: "Vegetable soup",
      keywords: "vegetable soup,vegetable,soup",
      life: 4
    },
    {
      name: "Cinnamon rolls",
      keywords: "cinnamon rolls,cinnamon roll,cinnamon,roll,rolls",
      life: 3
    },
    {
      name: "Bratwurst",
      keywords: "fresh brautwurst,brautwurst,fresh",
      life: 3
    },
    {
      name: "Bratwurst",
      keywords:
        "smoked brautwurst,processed brautwurst,bratwurst,smoked,processed",
      life: 7
    },
    {
      name: "Dates",
      keywords: "Dates",
      life: 730
    },
    {
      name: "Coffee",
      keywords: "Coffee,home ground,non vacuum,ground,home,vacuum",
      life: 730
    },
    {
      name: "Whole wheat flour",
      keywords: "Whole wheat flour,Whole,wheat,flour,wheat flour,whole wheat",
      life: 365
    },
    {
      name: "Pecans",
      keywords: "chopped pecans,pecan,pecans,chopped",
      life: 365
    },
    {
      name: "Yuzu juice",
      keywords: "yuzu juice,yuzu,juice",
      life: 730
    },
    {
      name: "Mustard",
      keywords: "mustard,dried mustard,ground mustard,dried ground mustard",
      life: 180
    },
    {
      name: "Cream",
      keywords: "Cream,whipped, sweetened",
      life: 1
    },
    {
      name: "Yogurt",
      keywords: "Yogurt",
      life: 60
    },
    {
      name: "Poultry pieces",
      keywords: "Poultry pieces,gravy,broth,poultry,pieces,piece",
      life: 4
    },
    {
      name: "Cooked fish",
      keywords: "Cooked fish,fish,all",
      life: 4
    },
    {
      name: "Leftovers",
      keywords:
        "leftover,leftovers,without meat,fish,poultry,egg,cooked vegetables,rice,potatoes,meat,vegetables,potato,vegetable",
      life: 4
    },
    {
      name: "Leftovers",
      keywords: "Leftovers,pizza",
      life: 4
    },
    {
      name: "Cooked pasta",
      keywords: "Cooked pasta,pasta",
      life: 5
    },
    {
      name: "Luncheon meat or poultry",
      keywords: "Luncheon meat,poultry,store sliced,meat,luncheon,store,sliced",
      life: 60
    },
    {
      name: "Pate",
      keywords: "Pate",
      life: 60
    },
    {
      name: "Peaches, nectarines, plums, pears, sapote",
      keywords:
        "Peaches,nectarines,plums,pears,sapote,peach,nectarine,plum,pear",
      life: 5
    },
    {
      name: "Fresh pasta",
      keywords: "Fresh pasta,pasta",
      life: 2
    },
    {
      name: "Canadian bacon",
      keywords: "Canadian bacon,bacon,whole",
      life: 14
    },
    {
      name: "Buckwheat",
      keywords: "Buckwheat,flour, meal,meal",
      life: 30
    },
    {
      name: "Millet",
      keywords: "Millet,flour, meal",
      life: 30
    },
    {
      name: "Chorizo",
      keywords: "fresh chorizo,chorizo",
      life: 2
    },
    {
      name: "Chorizo",
      keywords:
        "smoked chorizo,chorizo,processed chorizo,smoked,processed,uncooked,uncooked processed chorizo,uncooked smoked chorizo",
      life: 7
    },
    {
      name: "Anchovies",
      keywords: "anchovies,anchovy,canned anchovies",
      life: 60
    },
    {
      name: "Coconut",
      keywords: "Coconut,shredded",
      life: 365
    },
    {
      name: "Tamarind",
      keywords: "Tamarind",
      life: 365
    },
    {
      name: "Kugel",
      keywords: "kugel,commercial,commercial kugel",
      life: 365
    },
    {
      name: "Mung bean",
      keywords:
        "mung beans,mung bean,mung,bean,dry mung beans,dry,bag,bagged mung beans",
      life: 365
    },
    {
      name: "Grapes",
      keywords: "Grapes,grape",
      life: 30
    },
    {
      name: "Melons",
      keywords: "Melons,melon",
      life: 30
    },
    {
      name: "Pesto",
      keywords: "Pesto,jarred,jar",
      life: 30
    },
    {
      name: "Kugel",
      keywords: "kugel,homemade,homemade kugel",
      life: 4
    },
    {
      name: "Prosciutto",
      keywords: "prosciutto",
      life: 90
    },
    {
      name: "Eggs",
      keywords: "Eggs,egg,hard boiled cooked,boiled,hard boiled",
      life: 7
    },
    {
      name: "Hummus",
      keywords:
        "Hummus,traditional,no preservatives,not pasteurized,no preservative,preservatives,preservative,pasteurized",
      life: 7
    },
    {
      name: "Apricots",
      keywords: "Apricots,Apricot",
      life: 5
    },
    {
      name: "Avocados",
      keywords: "Avocados,Avocado",
      life: 4
    },
    {
      name: "Guava",
      keywords: "Guava",
      life: 4
    },
    {
      name: "Kiwi fruit",
      keywords: "Kiwi fruit,kiwi,fruit",
      life: 6
    },
    {
      name: "Artichokes, whole",
      keywords: "Artichokes,artichoke,whole",
      life: 7
    },
    {
      name: "Cucumbers",
      keywords: "Cucumbers,cucumber",
      life: 7
    },
    {
      name: "Lettuce",
      keywords: "Lettuce,iceberg,romaine",
      life: 5
    },
    {
      name: "Spinach",
      keywords: "Lettuce,leaf,spinach",
      life: 5
    },
    {
      name: "Radishes",
      keywords: "Radishes,radish",
      life: 14
    },
    {
      name: "Bagged greens",
      keywords: "Bagged greens,leaf,spinach,lettuce,bagged,greens,green",
      life: 5
    },
    {
      name: "Egg salad",
      keywords: "Egg salad,egg,salad",
      life: 4
    },
    {
      name: "Potato salad",
      keywords: "Potato salad,potato,salad",
      life: 5
    },
    {
      name: "Seafood salads",
      keywords:
        "Seafood salads,tuna salad, shrimp salad, salmon salad, mixed seafood salad,seafood,salads,salad,tuna,shrimp,salmon,mixed,mixed seafood,seafood salad,",
      life: 4
    },
    {
      name: "Chicken salad",
      keywords: "Chicken salad,chicken,salad",
      life: 4
    },
    {
      name: "Ham salad",
      keywords: "Ham salad,ham,salad",
      life: 4
    },
    {
      name: "Pasta salad",
      keywords: "Pasta salad,pasta,salad",
      life: 5
    },
    {
      name: "Ricotta",
      keywords: "Ricotta",
      life: 14
    },
    {
      name: "Milk",
      keywords: "Milk,lactose,lactose-free",
      life: 7
    },
    {
      name: "Apple cider",
      keywords: "apple cider,apple,cider",
      life: 21
    },
    {
      name: "Yuzu",
      keywords: "yuzu,yuzu fruit",
      life: 7
    },
    {
      name: "Half and Half",
      keywords: "Cream,half",
      life: 7
    },
    {
      name: "Heavy Cream",
      keywords: "Cream,heavy",
      life: 30
    },
    {
      name: "Jerky",
      keywords: "Jerky,homemade",
      life: 60
    },
    {
      name: "Cooked shellfish",
      keywords: "Cooked shellfish,shellfish,fish,cooked",
      life: 4
    },
    {
      name: "Tofu",
      keywords: "Tofu",
      life: 4
    },
    {
      name: "Re-hydrated textured soy protein",
      keywords:
        "Re hydrated textured soy protein,protein,TSP,soy,soy protein,textured soy protein,Re hydrated",
      life: 4
    },
    {
      name: "Casseroles",
      keywords: "Casseroles,Casserole",
      life: 4
    },
    {
      name: "Flour",
      keywords: "Flour,white",
      life: 365
    },
    {
      name: "Asparagus",
      keywords: "Asparagus",
      life: 4
    },
    {
      name: "Beets",
      keywords: "Beets",
      life: 4
    },
    {
      name: "Bok choy",
      keywords: "Bok choy",
      life: 4
    },
    {
      name: "Broccoli and broccoli raab (rapini)",
      keywords: "Broccoli,broccoli raab,rapini,raab",
      life: 4
    },
    {
      name: "Brussels sprouts",
      keywords: "Brussels sprouts,brussels,sprouts,sprout,brussel",
      life: 4
    },
    {
      name: "Cabbage",
      keywords: "Cabbage",
      life: 60
    },
    {
      name: "Carrots",
      keywords: "Carrots,carrot",
      life: 30
    },
    {
      name: "Parsnips",
      keywords: "parsnips,parsnip",
      life: 21
    },
    {
      name: "Cauliflower",
      keywords: "Cauliflower",
      life: 14
    },
    {
      name: "Celery",
      keywords: "Celery",
      life: 14
    },
    {
      name: "Corn on the cob",
      keywords: "Corn,cob",
      life: 3
    },
    {
      name: "Eggplant",
      keywords: "Eggplant,egg",
      life: 10
    },
    {
      name: "Garlic",
      keywords: "Garlic",
      life: 180
    },
    {
      name: "Ginger root",
      keywords: "Ginger root,ginger,root",
      life: 30
    },
    {
      name: "Leeks",
      keywords: "Leeks,leek",
      life: 14
    },
    {
      name: "Okra",
      keywords: "Okra",
      life: 3
    },
    {
      name: "Onions",
      keywords: "Onions,yellow,white,red,onion",
      life: 90
    },
    {
      name: "Green Onions",
      keywords: "Onions,spring,green,onion",
      life: 14
    },
    {
      name: "Pumpkins",
      keywords: "Pumpkins,pumpkin",
      life: 90
    },
    {
      name: "Rhubarb",
      keywords: "Rhubarb",
      life: 7
    },
    {
      name: "Rutabagas",
      keywords: "Rutabagas",
      life: 120
    },
    {
      name: "Zucchini",
      keywords: "Squash,summer,zucchini",
      life: 4
    },
    {
      name: "Winter Squash",
      keywords: "Squash,winter",
      life: 5
    },
    {
      name: "Tomatoes",
      keywords: "Tomatoes,tomato",
      life: 7
    },
    {
      name: "Turnips",
      keywords: "Turnips,turnip",
      life: 14
    },
    {
      name: "Dough",
      keywords: "Dough,commercial,bread,cookie",
      life: 4
    },
    {
      name: "Egg substitutes",
      keywords: "Egg substitutes,egg,substitute,Egg substitute",
      life: 4
    },
    {
      name: "Fish",
      keywords: "Fish,raw,headed,gutted",
      life: 4
    },
    {
      name: "Frozen pretzels",
      keywords: "Frozen pretzels,frozen,pretzels,pretzel",
      life: 4
    },
    {
      name: "Lobster tails",
      keywords: "Lobster tails,tail,lobster,Lobster tail",
      life: 4
    },
    {
      name: "Sausages",
      keywords: "Sausages,Sausage,uncooked,cooked",
      life: 4
    },
    {
      name: "Sausages",
      keywords: "Sausages,Sausage,precooked,cooked",
      life: 4
    },
    {
      name: "Shrimp, shellfish",
      keywords: "Shrimp,shellfish,fish",
      life: 4
    },
    {
      name: "Soy crumbles and hot dogs",
      keywords: "Soy crumbles,hot dogs,hot dog,soy,soy crumble",
      life: 4
    },
    {
      name: "Soy meat substitutes",
      keywords:
        "Soy meat substitutes,soy,meat,soy meat,meat substitutes,substitutes,substitute",
      life: 4
    },
    {
      name: "Tempeh",
      keywords: "Tempeh",
      life: 4
    },
    {
      name: "Vegetables",
      keywords: "Vegetables,vegetable",
      life: 4
    },
    {
      name: "Dry gravy mixes",
      keywords: "Dry gravy mixes,gravy,mixes,mix,dry",
      life: 2
    },
    {
      name: "Mushrooms",
      keywords: "Mushrooms,Mushroom,dried",
      life: 14
    },
    {
      name: "Potatoes",
      keywords: "Potatoes,Potato,instant",
      life: 90
    },
    {
      name: "Yams/sweet potatoes",
      keywords: "Yams,sweet potatoes,potatoes,potato,yam",
      life: 7
    },
    {
      name: "Kale",
      keywords: "Kale",
      life: 7
    },
    {
      name: "Fruit cocktail",
      keywords: "Fruit cocktail,cocktail,fruit,canned,can",
      life: 540
    },
    {
      name: "Muffin",
      keywords:
        "Muffin,mix,dry,commercially packaged,packaged,commercially,commercial",
      life: 270
    },
    {
      name: "Coconut oil",
      keywords: "Coconut oil,coconut,oil",
      life: 1095
    },
    {
      name: "Roasted red peppers",
      keywords:
        "Roasted red peppers,roasted,red,peppers,jar,Roasted red,red peppers,pepper",
      life: 180
    },
    {
      name: "Red wine",
      keywords: "Red wine,red,wine",
      life: 1825
    },
    {
      name: "White wine",
      keywords: "White wine,white,wine",
      life: 730
    },
    {
      name: "Dry stuffing mix",
      keywords:
        "Dry stuffing mix,Dry stuffing,stuffing mix,Dry,stuffing,mix,commercially packaged,packaged,commercially,commercial,pack",
      life: 365
    },
    {
      name: "Powdered milk",
      keywords: "Powdered milk,Powdered,milk,powder",
      life: 1825
    },
    {
      name: "Almond butter",
      keywords: "Almond butter,Almond,butter",
      life: 365
    },
    {
      name: "Cashew butter",
      keywords: "Cashew butter,Cashew,butter",
      life: 90
    },
    {
      name: "Cilantro",
      keywords: "Cilantro",
      life: 14
    },
    {
      name: "Mint",
      keywords: "Mint",
      life: 14
    },
    {
      name: "Basil",
      keywords: "Basil,dried",
      life: 365
    },
    {
      name: "Basil",
      keywords: "Basil,fresh",
      life: 5
    },
    {
      name: "Oregano",
      keywords: "Oregano",
      life: 14
    },
    {
      name: "Rosemary",
      keywords: "Rosemary",
      life: 14
    },
    {
      name: "Chives",
      keywords: "Chives",
      life: 14
    },
    {
      name: "Thyme",
      keywords: "Thyme",
      life: 14
    },
    {
      name: "Duck fat",
      keywords: "Duck fat,duck",
      life: 30
    },
    {
      name: "Almond extract",
      keywords: "Almond extract",
      life: 730
    },
    {
      name: "Cinnamon extract",
      keywords: "Cinnamon extract",
      life: 730
    },
    {
      name: "Lemon extract",
      keywords: "Lemon extract,lemon",
      life: 730
    },
    {
      name: "Pure vanilla extract",
      keywords: "vanilla,vanila extract",
      life: 730
    },
    {
      name: "Butter flavor",
      keywords: "Butter flavor,butter",
      life: 730
    },
    {
      name: "Coconut flavor",
      keywords: "Coconut flavor,coconut",
      life: 730
    },
    {
      name: "Genuine Maple syrup",
      keywords: "Genuine Maple syrup,syrup,unopened, plastic",
      life: 730
    },
    {
      name: "Cream liquors",
      keywords: "Cream liquors,liquors,unopened,liquor",
      life: 240
    },
    {
      name: "Quark",
      keywords: "Quark,fresh cheese,cheese",
      life: 10
    },
    {
      name: "Swiss chard",
      keywords: "Swiss chard,chard",
      life: 10
    },
    {
      name: "Granola",
      keywords: "Granola",
      life: 270
    },
    {
      name: "Pork rinds",
      keywords: "Pork rinds,pork,rinds",
      life: 120
    },
    {
      name: "Hot sauce",
      keywords: "Hot sauce,sauce",
      life: 180
    },
    {
      name: "Pate",
      keywords: "Pate,meat",
      life: 7
    },
    {
      name: "Pate",
      keywords: "Pate,poultry",
      life: 7
    },
    {
      name: "Cranberry sauce",
      keywords: "Cranberry sauce,sauce,homemade",
      life: 10
    },
    {
      name: "Vegetable juice",
      keywords: "Vegetable juice,commercial,refrigerated,vegetable",
      life: 30
    },
    {
      name: "Marinated vegetables",
      keywords: "Marinated vegetables,vegetables,oil,vegetable",
      life: 4
    },
    {
      name: "Salsa",
      keywords: "Salsa,fresh",
      life: 7
    },
    {
      name: "Chia seeds",
      keywords: "Chia seeds,chia,seed,seeds",
      life: 540
    },
    {
      name: "Bread",
      keywords: "Bread,Breads,homemade",
      life: 5
    },
    {
      name: "Spaghetti squash",
      keywords: "Spaghetti squash,squash,whole",
      life: 14
    },
    {
      name: "Spaghetti squash",
      keywords: "Spaghetti squash,squash,cut",
      life: 5
    },
    {
      name: "Garam masala",
      keywords: "Garam masala",
      life: 365
    },
    {
      name: "Cherry tomatoes",
      keywords: "Cherry, tomatoes,tomato",
      life: 10
    },
    {
      name: "Coleslaw",
      keywords:
        "coleslaw,homemade,homemade coleslaw,prepared,prepared coleslaw",
      life: 5
    },
    {
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      name: "Pumpkin seeds",
      keywords: "pumpkin,pumpkin seed,pumpkin seeds,seed,seeds",
      life: 180
    },
    {
      name: "Sunflower seeds",
      keywords: "sunflower,sunflower seed,sunflower seeds,seed,seeds",
      life: 365
    },
    {
      name: "Sesame seeds",
      keywords: "sesame seeds,sesame,seeds,seed",
      life: 1825
    },
    {
      name: "Tuna",
      keywords: "canned tuna,tuna,canned",
      life: 1095
    },
    {
      name: "Seafood",
      keywords: "canned seafood,seafood,canned",
      life: 365
    },
    {
      name: "Salad dressing",
      keywords: "salad dressing,vinaigrette,salad,dressing,homemade",
      life: 21
    },
    {
      name: "Beets",
      keywords: "pickled beets,beets,pickled",
      life: 365
    },
    {
      name: "Bulgur",
      keywords: "bulgur",
      life: 365
    },
    {
      name: "Edamame",
      keywords: "edamame,fresh,fresh edamame,soybeans,soybean",
      life: 5
    },
    {
      name: "Edamame",
      keywords: "edamame,soybean,soybeans,salted,roasted,dry roasted",
      life: 365
    },
    {
      name: "Breadcrumbs",
      keywords: "breadcrumbs,breadcrumb",
      life: 180
    },
    {
      name: "Salsa",
      keywords: "homemade salsa,homemade,salsa",
      life: 365
    },
    {
      name: "Barbecue Sauce",
      keywords:
        "homemade barbecue sauce,homemade sauce,homemade BBQ sauce,BBQ sauce,barbecue sauce",
      life: 365
    },
    {
      name: "Tomato Sauce",
      keywords:
        "homemade tomato sauce,homemade sauce,homemade spaghetti sauce,spaghetti sauce,tomato sauce,homemade",
      life: 365
    },
    {
      name: "Ghee",
      keywords: "ghee,clarified butter,clarified,butter",
      life: 240
    },
    {
      name: "Corn syrup",
      keywords: "corn syrup,corn,syrup",
      life: 1095
    },
    {
      name: "Instant breakfast drinks",
      keywords:
        "instant breakfast drinks,instant,breakfast,drinks,instant breakfast,instant drink,carnation,bottled instant breakfast drink,bottled instant breakfast,bottled breakfast",
      life: 180
    },
    {
      name: "Cereal or granola bars",
      keywords:
        "bars,bar,granola bars,granola bar,granola,cereal bars,cereal bar,nutrition bars,nutrition bar,energy bars,energy bar,health bars,health bar,fruit bars,fruit bar,snack bars,snack barsnack,,nut bars,nut bar,seed bars,seed bar,crunchy bars,crunchy bar,breakfast,breakfast bar,breakfast bars",
      life: 365
    },
    {
      name: "Milk",
      keywords: "ultra pasteurized milk,milk,pasteurized,ultra",
      life: 90
    },
    {
      name: "Celery root",
      keywords: "celeriac,celery root,celery",
      life: 7
    },
    {
      name: "Pastrami",
      keywords: "pastrami",
      life: 40
    },
    {
      name: "Aioli",
      keywords:
        "garlic aioli,aioli,garlic,mayonnaise,mayo,garlic mayo,garlic mayonnaise,mayo",
      life: 4
    },
    {
      name: "Radicchio",
      keywords: "radicchio",
      life: 21
    },
    {
      name: "Arugula",
      keywords: "arugula,greens,salad greens,salad",
      life: 7
    },
    {
      name: "Mung bean",
      keywords:
        "sprouted mung beans,sprouted mung bean,sprout,mung beans,mung bean,mung,bean,mungbean,sprouts",
      life: 42
    },
    {
      name: "Mung bean",
      keywords:
        "mung beans,mung bean,mung,bean,dry mung beans,dry,vacuum sealed,vacuum sealed mung beans",
      life: 3650
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
