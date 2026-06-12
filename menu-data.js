const MENU_CATEGORIES = [
  {
    "id": "breakfast",
    "name": "Breakfast & Quick Bites",
    "tagline": "Pav, parathas, toast, bhajji and hot breakfast plates.",
    "items": [
      {
        "name": "Bhajji / Vada / Mirchi Pav",
        "desc": "Mixed and suka options",
        "price": 69,
        "veg": true
      },
      {
        "name": "Aloo Paratha",
        "desc": "Served homestyle",
        "price": 79,
        "veg": true
      },
      {
        "name": "Poori Bhajji",
        "desc": "3 pieces with bhajji",
        "price": 89,
        "veg": true
      },
      {
        "name": "Chapati Bhajji",
        "desc": "Chapati with bhajji",
        "price": 89,
        "veg": true
      },
      {
        "name": "Veg Sandwich",
        "desc": "Fresh vegetarian sandwich",
        "price": 59,
        "veg": true
      },
      {
        "name": "Veg Toast",
        "desc": "Toasted vegetarian sandwich",
        "price": 69,
        "veg": true
      },
      {
        "name": "Bread Butter Toast",
        "desc": "Golden bread butter toast",
        "price": 49,
        "veg": true
      },
      {
        "name": "Fruit Salad Full Bowl",
        "desc": "Fresh fruit bowl",
        "price": 129,
        "veg": true
      },
      {
        "name": "Mirchi",
        "desc": "Spicy mirchi snack",
        "price": 49,
        "veg": true
      },
      {
        "name": "Kappa / Potato Bajji",
        "desc": "Crispy bajji portion",
        "price": 89,
        "veg": true
      },
      {
        "name": "French Fries",
        "desc": "Classic fries",
        "price": 89,
        "veg": true
      },
      {
        "name": "Bhajji",
        "desc": "Hot bhajji portion",
        "price": 49,
        "veg": true
      },
      {
        "name": "Plain Papad",
        "desc": "Crisp papad",
        "price": 10,
        "veg": true
      },
      {
        "name": "Chicken Sandwich Toast",
        "desc": "Toasted chicken sandwich",
        "price": 89,
        "veg": false
      },
      {
        "name": "Egg Burji with 2 Chapati",
        "desc": "Egg bhurji meal",
        "price": 99,
        "veg": false
      },
      {
        "name": "Chicken Masala with 2 Chapati",
        "desc": "Chicken masala meal",
        "price": 179,
        "veg": false
      },
      {
        "name": "Bread Omelette",
        "desc": "Classic bread omelette",
        "price": 59,
        "veg": false
      },
      {
        "name": "Omelette Masala Double Egg",
        "desc": "Double egg masala omelette",
        "price": 49,
        "veg": false
      },
      {
        "name": "Boiled Egg",
        "desc": "Simple boiled egg",
        "price": 29,
        "veg": false
      }
    ]
  },
  {
    "id": "beverages",
    "name": "Beverages",
    "tagline": "Tea, coffee, fresh juice and cool drinks.",
    "items": [
      {
        "name": "Tea",
        "desc": "Fresh hot tea",
        "price": 20,
        "veg": true
      },
      {
        "name": "Coffee",
        "desc": "Hot coffee",
        "price": 30,
        "veg": true
      },
      {
        "name": "Lemon Ginger Tea",
        "desc": "Hot lemon ginger tea",
        "price": 30,
        "veg": true
      },
      {
        "name": "Black Coffee",
        "desc": "Hot black coffee",
        "price": 30,
        "veg": true
      },
      {
        "name": "Cold Coffee",
        "desc": "Chilled coffee",
        "price": 89,
        "veg": true
      },
      {
        "name": "Fresh Juice",
        "desc": "No sugar added: watermelon, pineapple, mausambi, orange, papaya, apple, banana",
        "price": 99,
        "veg": true
      },
      {
        "name": "Lime Soda",
        "desc": "Sweet / salt",
        "price": 40,
        "veg": true
      },
      {
        "name": "Butter Milk",
        "desc": "Refreshing chaas",
        "price": 49,
        "veg": true
      },
      {
        "name": "Sweet Lassi",
        "desc": "Sweet yoghurt drink",
        "price": 69,
        "veg": true
      },
      {
        "name": "Pepsi / Coke / Thumbs Up Can",
        "desc": "Soft drink can",
        "price": 50,
        "veg": true
      },
      {
        "name": "Water 500ml",
        "desc": "Mineral water bottle",
        "price": 15,
        "veg": true
      },
      {
        "name": "Water 1L",
        "desc": "Mineral water bottle",
        "price": 25,
        "veg": true
      }
    ]
  },
  {
    "id": "starters",
    "name": "Starters & Fry Specials",
    "tagline": "Crispy, spicy and made for sharing before the main meal.",
    "items": [
      {
        "name": "Veg Manchurian",
        "desc": "Indo-Chinese favourite",
        "price": 229,
        "veg": true
      },
      {
        "name": "Paneer 65",
        "desc": "Spicy fried paneer",
        "price": 249,
        "veg": true
      },
      {
        "name": "Veg 65",
        "desc": "Crispy vegetable starter",
        "price": 229,
        "veg": true
      },
      {
        "name": "Veg Crispy",
        "desc": "Crunchy tossed vegetables",
        "price": 229,
        "veg": true
      },
      {
        "name": "French Fries Peri Peri",
        "desc": "Peri peri fries",
        "price": 139,
        "veg": true
      },
      {
        "name": "Masala Papad",
        "desc": "Crisp papad with masala topping",
        "price": 89,
        "veg": true
      },
      {
        "name": "Paneer Tikka",
        "desc": "Tandoori-style paneer",
        "price": 249,
        "veg": true
      },
      {
        "name": "Mushroom Tikka",
        "desc": "Spiced mushroom tikka",
        "price": 249,
        "veg": true
      },
      {
        "name": "Chilli Potato",
        "desc": "Spicy potato starter",
        "price": 229,
        "veg": true
      },
      {
        "name": "Mix Pakoda",
        "desc": "Mixed pakoda plate",
        "price": 229,
        "veg": true
      },
      {
        "name": "Veg Kebab",
        "desc": "Vegetarian kebab starter",
        "price": 229,
        "veg": true
      },
      {
        "name": "Chilli Chicken",
        "desc": "Spicy Indo-Chinese chicken",
        "price": 249,
        "veg": false
      },
      {
        "name": "Chicken 65 / Kebab",
        "desc": "Crispy chicken starter",
        "price": 249,
        "veg": false
      },
      {
        "name": "Crispy Honey Chicken",
        "desc": "Sweet-spicy crispy chicken",
        "price": 289,
        "veg": false
      },
      {
        "name": "Crispy Chicken",
        "desc": "Crisp fried chicken",
        "price": 249,
        "veg": false
      },
      {
        "name": "Ghee Roast Chicken",
        "desc": "Rich ghee roast chicken",
        "price": 289,
        "veg": false
      },
      {
        "name": "Pepper Chicken",
        "desc": "Peppery chicken starter",
        "price": 249,
        "veg": false
      },
      {
        "name": "Prawns Rava Fry",
        "desc": "Rava fried prawns",
        "price": 449,
        "veg": false
      },
      {
        "name": "Prawns Masala Fry",
        "desc": "Masala fried prawns",
        "price": 449,
        "veg": false
      },
      {
        "name": "Prawns 65",
        "desc": "Spicy prawns 65",
        "price": 449,
        "veg": false
      },
      {
        "name": "Mutton Sukha",
        "desc": "Dry mutton preparation",
        "price": 499,
        "veg": false
      },
      {
        "name": "Mutton 65",
        "desc": "Spicy mutton starter",
        "price": 499,
        "veg": false
      },
      {
        "name": "Fish Fry Bangda 1pc",
        "desc": "Bangda fish fry",
        "price": 129,
        "veg": false
      },
      {
        "name": "Fish Fry Lepo 2pc",
        "desc": "Lepo fish fry",
        "price": 129,
        "veg": false
      },
      {
        "name": "Kingfish Fry 1pc",
        "desc": "Kingfish fry",
        "price": 189,
        "veg": false
      },
      {
        "name": "Kingfish Fry 2pc",
        "desc": "Kingfish fry",
        "price": 349,
        "veg": false
      },
      {
        "name": "Kingfish Fry 4pc",
        "desc": "Kingfish fry",
        "price": 629,
        "veg": false
      },
      {
        "name": "Chonak Fry 1pc",
        "desc": "Chonak fish fry",
        "price": 149,
        "veg": false
      },
      {
        "name": "Chonak Fry 2pc",
        "desc": "Chonak fish fry",
        "price": 269,
        "veg": false
      },
      {
        "name": "Chonak Fry 4pc",
        "desc": "Chonak fish fry",
        "price": 499,
        "veg": false
      },
      {
        "name": "Modso Fry 1pc",
        "desc": "Modso fish fry",
        "price": 149,
        "veg": false
      },
      {
        "name": "Modso Fry 2pc",
        "desc": "Modso fish fry",
        "price": 269,
        "veg": false
      },
      {
        "name": "Modso Fry 4pc",
        "desc": "Modso fish fry",
        "price": 499,
        "veg": false
      },
      {
        "name": "Pomfret Fish Fry 1pc",
        "desc": "Pomfret fish fry",
        "price": 599,
        "veg": false
      }
    ]
  },
  {
    "id": "main-course",
    "name": "Main Course Curries",
    "tagline": "Veg, chicken, mutton, fish and prawns gravies with rich homestyle flavour.",
    "items": [
      {
        "name": "Dal Tadka",
        "desc": "Yellow dal with tadka",
        "price": 229,
        "veg": true
      },
      {
        "name": "Paneer Masala",
        "desc": "Paneer in masala gravy",
        "price": 249,
        "veg": true
      },
      {
        "name": "Paneer Tikka Masala",
        "desc": "Smoky paneer gravy",
        "price": 249,
        "veg": true
      },
      {
        "name": "Paneer Matter",
        "desc": "Paneer with green peas",
        "price": 249,
        "veg": true
      },
      {
        "name": "Shahi Paneer",
        "desc": "Creamy paneer curry",
        "price": 249,
        "veg": true
      },
      {
        "name": "Paneer Pasanda",
        "desc": "Rich paneer preparation",
        "price": 249,
        "veg": true
      },
      {
        "name": "Paneer Butter Masala",
        "desc": "Creamy tomato butter gravy",
        "price": 249,
        "veg": true
      },
      {
        "name": "Aloo Bendi",
        "desc": "Potato and bhindi masala",
        "price": 249,
        "veg": true
      },
      {
        "name": "Aloo Matter",
        "desc": "Potato and peas curry",
        "price": 229,
        "veg": true
      },
      {
        "name": "Aloo Tikka Masala",
        "desc": "Spiced potato gravy",
        "price": 229,
        "veg": true
      },
      {
        "name": "Aloo Gobi Masala",
        "desc": "Potato cauliflower curry",
        "price": 229,
        "veg": true
      },
      {
        "name": "Mix Veg",
        "desc": "Mixed vegetable curry",
        "price": 249,
        "veg": true
      },
      {
        "name": "Veg Kolhapuri",
        "desc": "Spicy Kolhapuri gravy",
        "price": 249,
        "veg": true
      },
      {
        "name": "Chicken Masala",
        "desc": "Chicken masala gravy",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Masala",
        "desc": "Mutton masala gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Hyderabadi",
        "desc": "Hyderabadi chicken gravy",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Hyderabadi",
        "desc": "Hyderabadi mutton gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Kolhapuri",
        "desc": "Spicy Kolhapuri chicken",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Kolhapuri",
        "desc": "Spicy Kolhapuri mutton",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Maguli",
        "desc": "Chicken Maguli gravy",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Maguli",
        "desc": "Mutton Maguli gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Butter Masala",
        "desc": "Butter masala chicken gravy",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Butter Masala",
        "desc": "Butter masala mutton gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Tikka Masala",
        "desc": "Chicken tikka masala gravy",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Tikka Masala",
        "desc": "Mutton tikka masala gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Sukha",
        "desc": "Dry chicken masala",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Sukha Main Course",
        "desc": "Dry mutton masala",
        "price": 499,
        "veg": false
      },
      {
        "name": "Chicken Handi",
        "desc": "Handi-style chicken gravy",
        "price": 259,
        "veg": false
      },
      {
        "name": "Mutton Handi",
        "desc": "Handi-style mutton gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Mutton Sakuti",
        "desc": "Goan-style mutton curry",
        "price": 499,
        "veg": false
      },
      {
        "name": "Mutton Gosh",
        "desc": "Rich mutton gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Fish Gravy Kingfish / Modso / Chonak",
        "desc": "Fresh fish gravy",
        "price": 459,
        "veg": false
      },
      {
        "name": "Fish Gravy Bangda / Lepo",
        "desc": "Local fish gravy",
        "price": 299,
        "veg": false
      },
      {
        "name": "Prawns Masala",
        "desc": "Prawns in masala gravy",
        "price": 499,
        "veg": false
      },
      {
        "name": "Egg Masala",
        "desc": "Egg masala gravy",
        "price": 199,
        "veg": false
      }
    ]
  },
  {
    "id": "lunch-thalis",
    "name": "Lunch Menu & Thalis",
    "tagline": "Complete plates with rice, chapati, curries, pickle, salad and seafood options.",
    "items": [
      {
        "name": "Veg Thali",
        "desc": "Rice, chapati, 3 veg curries, papad, pickle and salad",
        "price": 169,
        "veg": true
      },
      {
        "name": "Andhra Veg Thali",
        "desc": "Rice, chapati, karam podi, 3 veg curries, rasam, sambar, curd, papad and pickle",
        "price": 259,
        "veg": true
      },
      {
        "name": "Dal Kichadi",
        "desc": "With papad, pickle and salad",
        "price": 169,
        "veg": true
      },
      {
        "name": "Dal Chapati / Rice",
        "desc": "Simple dal meal",
        "price": 99,
        "veg": true
      },
      {
        "name": "Curd Rice",
        "desc": "Cool comfort bowl",
        "price": 99,
        "veg": true
      },
      {
        "name": "Chapati",
        "desc": "Single chapati",
        "price": 20,
        "veg": true
      },
      {
        "name": "Chicken Thali",
        "desc": "Rice, chapati, chicken masala, sol kadhi, kismur/egg fry, veg curry, pickle and salad",
        "price": 189,
        "veg": false
      },
      {
        "name": "Andhra Chicken Thali",
        "desc": "Rice, chapati, karam podi, chicken gravy, chicken fry, egg fry, 2 veg curries, sambar, rasam, curd, papad and pickle",
        "price": 349,
        "veg": false
      },
      {
        "name": "Fish Thali Lepo / Bangda",
        "desc": "Rice, chapati, fish rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, pickle and salad",
        "price": 189,
        "veg": false
      },
      {
        "name": "Fish Thali Chonak / Modso",
        "desc": "Rice, chapati, fish rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, pickle and salad",
        "price": 299,
        "veg": false
      },
      {
        "name": "Fish Thali Kingfish",
        "desc": "Rice, chapati, kingfish rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, pickle and salad",
        "price": 349,
        "veg": false
      },
      {
        "name": "Fish Thali Pomfret",
        "desc": "Rice, chapati, pomfret rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, pickle and salad",
        "price": 749,
        "veg": false
      },
      {
        "name": "Prawns Thali",
        "desc": "Rice, chapati, prawns rava/tawa fry, sol kadhi, kismur/egg fry, veg curry, pickle and salad",
        "price": 399,
        "veg": false
      },
      {
        "name": "Mutton Thali",
        "desc": "Rice, chapati, mutton gravy, sol kadhi, egg fry, veg curry, pickle and salad",
        "price": 449,
        "veg": false
      }
    ]
  },
  {
    "id": "biryani-rice",
    "name": "Biryani & Rice",
    "tagline": "Filling biryani plates, rice dishes and seafood rice options.",
    "items": [
      {
        "name": "Veg Biryani",
        "desc": "Vegetarian biryani",
        "price": 199,
        "veg": true
      },
      {
        "name": "Paneer Biryani",
        "desc": "Paneer biryani",
        "price": 229,
        "veg": true
      },
      {
        "name": "Jeera Rice",
        "desc": "Fragrant cumin rice",
        "price": 109,
        "veg": true
      },
      {
        "name": "Ghee Rice",
        "desc": "Fragrant ghee rice",
        "price": 129,
        "veg": true
      },
      {
        "name": "Plain Rice",
        "desc": "Steamed rice",
        "price": 79,
        "veg": true
      },
      {
        "name": "Sambar Rice",
        "desc": "Comforting sambar rice",
        "price": 119,
        "veg": true
      },
      {
        "name": "Masala Rice",
        "desc": "Spiced masala rice",
        "price": 149,
        "veg": true
      },
      {
        "name": "Chicken Biryani Full",
        "desc": "Full portion chicken biryani",
        "price": 239,
        "veg": false
      },
      {
        "name": "Chicken Biryani Half",
        "desc": "Half portion chicken biryani",
        "price": 169,
        "veg": false
      },
      {
        "name": "Mutton Biryani",
        "desc": "Mutton biryani",
        "price": 499,
        "veg": false
      },
      {
        "name": "Prawns Biryani",
        "desc": "Prawns biryani",
        "price": 449,
        "veg": false
      },
      {
        "name": "Fish Fry Biryani",
        "desc": "Biryani with fish fry",
        "price": 349,
        "veg": false
      }
    ]
  },
  {
    "id": "chinese",
    "name": "Chinese",
    "tagline": "Fried rice and hakka noodles in veg, egg, chicken and seafood options.",
    "items": [
      {
        "name": "Veg Fried Rice",
        "desc": "Veg fried rice",
        "price": 199,
        "veg": true
      },
      {
        "name": "Szechwan Veg Fried Rice",
        "desc": "Spicy Szechwan veg fried rice",
        "price": 239,
        "veg": true
      },
      {
        "name": "Veg Hakka Noodles",
        "desc": "Veg hakka noodles",
        "price": 229,
        "veg": true
      },
      {
        "name": "Szechwan Veg Hakka Noodles",
        "desc": "Spicy Szechwan veg noodles",
        "price": 249,
        "veg": true
      },
      {
        "name": "Chicken Fried Rice",
        "desc": "Chicken fried rice",
        "price": 249,
        "veg": false
      },
      {
        "name": "Szechwan Chicken Fried Rice",
        "desc": "Spicy Szechwan chicken fried rice",
        "price": 259,
        "veg": false
      },
      {
        "name": "Chicken Hakka Noodles",
        "desc": "Chicken hakka noodles",
        "price": 259,
        "veg": false
      },
      {
        "name": "Szechwan Chicken Hakka Noodles",
        "desc": "Spicy Szechwan chicken noodles",
        "price": 269,
        "veg": false
      },
      {
        "name": "Egg Fried Rice",
        "desc": "Egg fried rice",
        "price": 229,
        "veg": false
      },
      {
        "name": "Szechwan Egg Fried Rice",
        "desc": "Spicy Szechwan egg fried rice",
        "price": 249,
        "veg": false
      },
      {
        "name": "Egg Hakka Noodles",
        "desc": "Egg hakka noodles",
        "price": 259,
        "veg": false
      },
      {
        "name": "Szechwan Egg Hakka Noodles",
        "desc": "Spicy Szechwan egg noodles",
        "price": 269,
        "veg": false
      },
      {
        "name": "Sea Food Hakka Noodles",
        "desc": "Seafood hakka noodles",
        "price": 399,
        "veg": false
      },
      {
        "name": "Sea Food Fried Rice",
        "desc": "Seafood fried rice",
        "price": 359,
        "veg": false
      }
    ]
  }
];

const REVIEWS = [
  {
    "name": "Subrata Mondal",
    "text": "A true gem for fish lovers. The owner is welcoming, and the food was awesome and healthy.",
    "tag": "Fish lovers"
  },
  {
    "name": "Mohammed Bin",
    "text": "The food quality and quantity for the price is really good. Small cozy café, but the food makes up for it.",
    "tag": "Value"
  },
  {
    "name": "Suthakar M",
    "text": "The rasam was full of flavour and memorable. Pleasant atmosphere with caring and attentive staff.",
    "tag": "Rasam"
  },
  {
    "name": "Prerit Srivastava",
    "text": "The quantity and taste at such a decent price is commendable. The owner is welcoming and humble.",
    "tag": "Taste"
  },
  {
    "name": "Nihar Rathod",
    "text": "Amazing quality and quantity for thali. Prawns Thali recommended. Also try Kingfish.",
    "tag": "Prawns thali"
  },
  {
    "name": "Susan Shee",
    "text": "Wonderful place to have food at a great price. Full value for your money. Awesome biryani.",
    "tag": "Biryani"
  },
  {
    "name": "Rose D’ Souza",
    "text": "Excellent service, extremely tasty food, excellent hygiene and graceful ambience.",
    "tag": "Hygiene"
  },
  {
    "name": "Kumar Komil",
    "text": "We had breakfast, lunch and dinner here for four days. Food quality is awesome and the owner is very nice.",
    "tag": "Daily meals"
  },
  {
    "name": "Vaishnavi Kharat",
    "text": "Affordable prices, really good food quality and taste. Fish thali and kingfish were cool.",
    "tag": "Fish thali"
  }
];

const DISH_IMAGES = {
  "bhajji-vada-mirchi-pav": "bhajipav.jpg",
  "aloo-paratha": "paraata.jpg",
  "poori-bhajji": "puribhaji.jpg",
  "chapati-bhajji": "rotisabhji.jpg",
  "veg-sandwich": "sandwichfries.jpg",
  "veg-toast": "sandwichfries.jpg",
  "bread-butter-toast": "breadbutter.jpg",
  "fruit-salad-full-bowl": "fruitsaladbowl.jpg",
  "mirchi": "mirchi.jpg",
  "kappa-potato-bajji": "cauliflowerdish.jpg",
  "french-fries": "freenchfires.jpg",
  "bhajji": "bhajipav.jpg",
  "plain-papad": "chaaat.jpg",
  "chicken-sandwich-toast": "sandwichfries.jpg",
  "egg-burji-with-2-chapati": "eggscrambleroti.jpg",
  "chicken-masala-with-2-chapati": "chickengravy.jpg",
  "bread-omelette": "ommlet.jpg",
  "omelette-masala-double-egg": "ommlet.jpg",
  "boiled-egg": "ommlet.jpg",
  "fresh-juice": "juices.jpg",
  "tea": "tea.jpg",
  "coffee": "coffeeart.jpg",
  "lemon-ginger-tea": "tea.jpg",
  "black-coffee": "coffeeart.jpg",
  "cold-coffee": "icecoffee.jpg",
  "lime-soda": "lemonsoda.jpg",
  "butter-milk": "icecoffee.jpg",
  "sweet-lassi": "icecoffee.jpg",
  "pepsi-coke-thumbs-up-can": "juices.jpg",
  "water-500ml": "juices.jpg",
  "water-1l": "juices.jpg",
  "veg-manchurian": "gobimachurian.jpg",
  "paneer-65": "paneer65fry.jpg",
  "veg-65": "vegtablesstirfry.jpg",
  "veg-crispy": "vegtablesstirfry.jpg",
  "french-fries-peri-peri": "cheeseefries.png",
  "masala-papad": "chaaat.jpg",
  "paneer-tikka": "butterpaneer.jpg",
  "mushroom-tikka": "vegcreamdish.jpg",
  "chilli-potato": "potatopeadish.jpg",
  "mix-pakoda": "puff.jpg",
  "veg-kebab": "chickenskwers.png",
  "chilli-chicken": "chickenstarter.jpg",
  "chicken-65-kebab": "chciken65.jpg",
  "crispy-honey-chicken": "chickenfry.jpg",
  "crispy-chicken": "chickenfrycutletbreast.jpg",
  "ghee-roast-chicken": "chcikencafreal.jpg",
  "pepper-chicken": "chickenstarter.jpg",
  "prawns-rava-fry": "prawnsfry65.jpg",
  "prawns-masala-fry": "prawns65.jpg",
  "prawns-65": "prawns65.jpg",
  "mutton-sukha": "muttondish.jpg",
  "mutton-65": "muttondish.jpg",
  "fish-fry-bangda-1pc": "fishfry.jpg",
  "fish-fry-lepo-2pc": "lepofry.jpg",
  "kingfish-fry-1pc": "kingfishfry.jpg",
  "kingfish-fry-2pc": "kingfishfry2.jpg",
  "kingfish-fry-4pc": "kingfishfry2.jpg",
  "chonak-fry-1pc": "fishfry.jpg",
  "chonak-fry-2pc": "fishfry.jpg",
  "chonak-fry-4pc": "fishfry.jpg",
  "modso-fry-1pc": "fishfry.jpg",
  "modso-fry-2pc": "fishfry.jpg",
  "modso-fry-4pc": "fishfry.jpg",
  "pomfret-fish-fry-1pc": "fishfry.jpg",
  "dal-tadka": "vegkurma.jpg",
  "paneer-masala": "butterpaneer.jpg",
  "paneer-tikka-masala": "butterpaneer.jpg",
  "paneer-matter": "potatopeadish.jpg",
  "shahi-paneer": "butterpaneer.jpg",
  "paneer-pasanda": "vegcreamdish.jpg",
  "paneer-butter-masala": "butterpaneer.jpg",
  "aloo-bendi": "okrafry.jpg",
  "aloo-matter": "potatopeadish.jpg",
  "aloo-tikka-masala": "potatopeadish.jpg",
  "aloo-gobi-masala": "cauliflowerdish.jpg",
  "mix-veg": "colourfulfood.jpg",
  "veg-kolhapuri": "khadaidish.jpg",
  "chicken-masala": "chickengravy.jpg",
  "mutton-masala": "muttondish.jpg",
  "chicken-hyderabadi": "chickencurry.jpg",
  "mutton-hyderabadi": "muttondish.jpg",
  "chicken-kolhapuri": "chickencurryoil.jpg",
  "mutton-kolhapuri": "muttondish.jpg",
  "chicken-maguli": "butteritemlikechicken.jpg",
  "mutton-maguli": "muttondish.jpg",
  "chicken-butter-masala": "butterchicken.jpg",
  "mutton-butter-masala": "muttondish.jpg",
  "chicken-tikka-masala": "butteritemlikechicken.jpg",
  "mutton-tikka-masala": "muttondish.jpg",
  "chicken-sukha": "murg.jpg",
  "mutton-sukha-main-course": "muttondish.jpg",
  "chicken-handi": "khadaidish.jpg",
  "mutton-handi": "muttondish.jpg",
  "mutton-sakuti": "muttondish.jpg",
  "mutton-gosh": "nihari.jpg",
  "fish-gravy-kingfish-modso-chonak": "prawnscurry.jpg",
  "fish-gravy-bangda-lepo": "chickencurryoil.jpg",
  "prawns-masala": "prawnscurry.jpg",
  "egg-masala": "eggscrambleroti.jpg",
  "veg-thali": "vegthali.jpg",
  "andhra-veg-thali": "vegthali.jpg",
  "dal-kichadi": "vegkurma.jpg",
  "dal-chapati-rice": "rotisabhji.jpg",
  "curd-rice": "chickenrice.jpg",
  "chapati": "rotisabhji.jpg",
  "chicken-thali": "chickencurry.jpg",
  "andhra-chicken-thali": "chickenfry.jpg",
  "fish-thali-lepo-bangda": "fishthali.jpg",
  "fish-thali-chonak-modso": "fishthali.jpg",
  "fish-thali-kingfish": "fishthali.jpg",
  "fish-thali-pomfret": "fishthali.jpg",
  "prawns-thali": "prawnsthali.jpg",
  "mutton-thali": "muttondish.jpg",
  "veg-biryani": "colourfulfood.jpg",
  "paneer-biryani": "butterpaneer.jpg",
  "jeera-rice": "chickenrice.jpg",
  "ghee-rice": "chickenrice.jpg",
  "plain-rice": "chickenrice.jpg",
  "sambar-rice": "vegkurma.jpg",
  "masala-rice": "chickenrice.jpg",
  "chicken-biryani-full": "chickenrice.jpg",
  "chicken-biryani-half": "chickenrice.jpg",
  "mutton-biryani": "muttondish.jpg",
  "prawns-biryani": "prawnsthali.jpg",
  "fish-fry-biryani": "fishthali.jpg",
  "veg-fried-rice": "vegtablesstirfry.jpg",
  "szechwan-veg-fried-rice": "vegtablesstirfry.jpg",
  "veg-hakka-noodles": "pasta.jpg",
  "szechwan-veg-hakka-noodles": "pasta.jpg",
  "chicken-fried-rice": "chickenrice.jpg",
  "szechwan-chicken-fried-rice": "chickenrice.jpg",
  "chicken-hakka-noodles": "pasta.jpg",
  "szechwan-chicken-hakka-noodles": "pasta.jpg",
  "egg-fried-rice": "eggscrambleroti.jpg",
  "szechwan-egg-fried-rice": "eggscrambleroti.jpg",
  "egg-hakka-noodles": "pasta.jpg",
  "szechwan-egg-hakka-noodles": "pasta.jpg",
  "sea-food-hakka-noodles": "pasta.jpg",
  "sea-food-fried-rice": "chickenrice.jpg"
};

function dishImage(item){
  const id = item.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  return DISH_IMAGES[id] || 'colourfulfood.jpg';
}
const MENU_PAGE_IMAGES = [
  'TaNaa_Menu_Final_temp_Page_1.png',
  'TaNaa_Menu_Final_temp_Page_2.png',
  'TaNaa_Menu_Final_temp_Page_3.png',
  'TaNaa_Menu_Final_temp_Page_4.png',
  'TaNaa_Menu_Final_temp_Page_5.png'
];
