const recipes = {
  'Rice Varieties': [
    {
      title: 'Plain White Rice',
      description: 'Simple boiled white rice.',
      prepTime: '5 minutes',
      cookTime: '20 minutes',
      ingredients: ['Rice', 'Water', 'Salt'],
      instructions: ['Rinse the rice thoroughly under cold water until the water runs clear, about 2-3 times. This removes excess starch and prevents stickiness.', 'In a large pot, bring 2 cups of water to a rolling boil over high heat.', 'Add the rinsed rice and 1/2 teaspoon of salt to the boiling water. Stir once to combine.', 'Reduce heat to low, cover the pot with a tight-fitting lid, and simmer for 15-18 minutes or until the water is absorbed and rice is tender.', 'Remove from heat and let stand, covered, for 5 minutes to steam. Fluff with a fork before serving.'],
      nutrition: { calories: 205, protein: 4, carbs: 45, fats: 0 },
      diet: 'Veg'
    },
    {
      title: 'Lemon Rice',
      description: 'Rice flavored with lemon and spices.',
      prepTime: '10 minutes',
      cookTime: '25 minutes',
      ingredients: ['Rice', 'Lemon', 'Mustard seeds', 'Curry leaves', 'Chili'],
      instructions: ['Cook 1 cup of rice according to package instructions until fluffy. Set aside to cool slightly.', 'In a small pan, heat 2 tablespoons of oil over medium heat. Add 1 teaspoon mustard seeds and let them splutter.', 'Add 2-3 dried red chilies (broken) and a handful of curry leaves. Sauté for 1 minute until fragrant.', 'Squeeze the juice of 1-2 lemons (about 2-3 tablespoons) into the pan. Stir well.', 'Add the cooked rice to the pan and mix thoroughly to coat every grain with the lemon-spice mixture. Cook for 2-3 minutes on low heat.', 'Taste and adjust seasoning if needed. Serve hot as a side dish.'],
      nutrition: { calories: 180, protein: 3, carbs: 35, fats: 4 },
      diet: 'Veg'
    },
    {
      title: 'Tamarind Rice',
      description: 'Rice mixed with tamarind paste and spices.',
      prepTime: '15 minutes',
      cookTime: '30 minutes',
      ingredients: ['Rice', 'Tamarind', 'Spices', 'Peanuts', 'Curry leaves'],
      instructions: ['Cook 1 cup of rice with 2 cups of water until fluffy and each grain is separate. Spread on a plate to cool.', 'Soak 1 tablespoon of tamarind in 1/2 cup warm water for 10 minutes. Squeeze to extract pulp, strain and set aside.', 'In a pan, dry roast 2 tablespoons peanuts until golden. Remove and set aside.', 'In the same pan, heat 2 tablespoons oil. Add 1 teaspoon mustard seeds, 2 dried chilies, and curry leaves. Sauté until mustard splutters.', 'Add 1/2 teaspoon turmeric, 1 teaspoon sambar powder, and salt. Stir for 30 seconds.', 'Add the tamarind extract and cook on medium heat until the mixture thickens slightly, about 5 minutes.', 'Add the cooled rice and roasted peanuts. Mix gently but thoroughly to coat the rice with the tangy spice mixture.', 'Cook on low heat for 2-3 minutes. Adjust seasoning and serve warm.'],
      nutrition: { calories: 220, protein: 5, carbs: 40, fats: 6 },
      diet: 'Veg'
    },
    {
      title: 'Curd Rice',
      description: 'Rice mixed with yogurt and spices.',
      ingredients: ['Rice', 'Yogurt', 'Milk', 'Spices', 'Ginger'],
      instructions: ['Cook rice.', 'Mix with yogurt.', 'Add spices.', 'Chill.']
    },
    {
      title: 'Tomato Rice',
      description: 'Rice cooked with tomatoes and spices.',
      ingredients: ['Rice', 'Tomatoes', 'Onion', 'Spices', 'Coriander'],
      instructions: ['Sauté veggies.', 'Add rice and water.', 'Cook.']
    },
    {
      title: 'Coconut Rice',
      description: 'Rice cooked with coconut milk.',
      ingredients: ['Rice', 'Coconut milk', 'Spices', 'Cashews'],
      instructions: ['Cook rice in coconut milk.', 'Add spices.']
    },
    {
      title: 'Biryani',
      description: 'Spiced rice with meat.',
      ingredients: ['Rice', 'Chicken', 'Spices', 'Onion', 'Yogurt'],
      instructions: ['Cook rice.', 'Fry meat.', 'Layer and dum cook.']
    },
    {
      title: 'Vegetable Pulao',
      description: 'Rice with vegetables.',
      ingredients: ['Rice', 'Vegetables', 'Spices', 'Ghee'],
      instructions: ['Sauté veggies.', 'Add rice and water.', 'Cook.']
    },
    {
      title: 'Pongal',
      description: 'Rice and lentil dish.',
      ingredients: ['Rice', 'Moong dal', 'Ghee', 'Pepper'],
      instructions: ['Cook rice and dal.', 'Temper.']
    },
    {
      title: 'Bisibele Bath',
      description: 'Spiced rice and lentil dish.',
      ingredients: ['Rice', 'Lentils', 'Vegetables', 'Spices'],
      instructions: ['Cook rice and lentils.', 'Add spices.']
    }
  ],
  'Curries': [
    {
      title: 'Sambar',
      description: 'Lentil stew with vegetables.',
      ingredients: ['Toor dal', 'Vegetables', 'Tamarind', 'Spices'],
      instructions: ['Cook dal.', 'Add veggies.', 'Season.']
    },
    {
      title: 'Rasam',
      description: 'Spicy tomato soup.',
      ingredients: ['Tomatoes', 'Tamarind', 'Spices', 'Garlic'],
      instructions: ['Boil tomatoes.', 'Add spices.']
    },
    {
      title: 'Dal',
      description: 'Lentil curry.',
      ingredients: ['Lentils', 'Spices', 'Ghee', 'Cilantro'],
      instructions: ['Cook lentils.', 'Temper spices.']
    },
    {
      title: 'Chicken Curry',
      description: 'Spicy chicken curry.',
      ingredients: ['Chicken', 'Spices', 'Coconut', 'Onion'],
      instructions: ['Brown chicken.', 'Add spices.', 'Simmer.']
    },
    {
      title: 'Mutton Curry',
      description: 'Mutton in spicy gravy.',
      ingredients: ['Mutton', 'Spices', 'Tomato', 'Onion'],
      instructions: ['Cook mutton.', 'Add spices.']
    },
    {
      title: 'Fish Curry',
      description: 'Fish in coconut curry.',
      ingredients: ['Fish', 'Coconut milk', 'Spices', 'Tamarind'],
      instructions: ['Cook fish.', 'Add curry.']
    },
    {
      title: 'Egg Curry',
      description: 'Boiled eggs in curry.',
      ingredients: ['Eggs', 'Spices', 'Tomato', 'Onion'],
      instructions: ['Boil eggs.', 'Make curry.', 'Add eggs.']
    },
    {
      title: 'Kootu',
      description: 'Vegetable and lentil mix.',
      ingredients: ['Vegetables', 'Lentils', 'Coconut', 'Spices'],
      instructions: ['Cook veggies and lentils.', 'Grind coconut.']
    },
    {
      title: 'Avial',
      description: 'Mixed vegetable curry.',
      ingredients: ['Mixed veggies', 'Coconut', 'Yogurt', 'Spices'],
      instructions: ['Cook veggies.', 'Add coconut paste.']
    },
    {
      title: 'Gojju',
      description: 'Spicy-tangy curry.',
      ingredients: ['Vegetables', 'Tamarind', 'Spices', 'Jaggery'],
      instructions: ['Cook veggies.', 'Add tamarind and spices.']
    }
  ],
  'Breakfast': [
    {
      title: 'Idli',
      description: 'Steamed rice cakes.',
      prepTime: '30 minutes',
      cookTime: '15 minutes',
      servings: '4',
      difficulty: 'Easy',
      diet: 'Veg',
      region: 'South India',
      nutrition: { calories: 150, protein: 5, carbs: 25, fats: 2 },
      ingredients: [
        { name: 'Rice', quantity: '2 cups', substitutes: ['Quinoa', 'Millet'] },
        { name: 'Urad dal', quantity: '1/2 cup', substitutes: ['Moong dal'] },
        { name: 'Water', quantity: 'as needed', substitutes: [] }
      ],
      instructions: ['Soak rice and dal for 4 hours.', 'Grind to smooth batter.', 'Ferment overnight.', 'Steam in idli molds for 10-12 minutes.'],
      tips: ['Use fresh batter for best results.', 'Serve hot with chutney and sambar.']
    },
    {
      title: 'Dosa',
      description: 'Crispy crepe.',
      ingredients: ['Rice', 'Urad dal', 'Potatoes'],
      instructions: ['Make batter.', 'Cook on griddle.'],
      diet: 'Veg'
    },
    {
      title: 'Vada',
      description: 'Fried lentil donuts.',
      ingredients: ['Urad dal', 'Spices', 'Oil'],
      instructions: ['Grind dal.', 'Fry.'],
      diet: 'Veg'
    },
    {
      title: 'Upma',
      description: 'Semolina dish.',
      ingredients: ['Semolina', 'Vegetables', 'Spices'],
      instructions: ['Roast semolina.', 'Cook with veggies.']
    },
    {
      title: 'Pongal',
      description: 'Rice and lentil breakfast.',
      ingredients: ['Rice', 'Moong dal', 'Ghee'],
      instructions: ['Cook rice and dal.', 'Temper.']
    },
    {
      title: 'Appam',
      description: 'Fermented pancakes.',
      ingredients: ['Rice', 'Coconut milk', 'Yeast'],
      instructions: ['Make batter.', 'Cook in pan.']
    },
    {
      title: 'Pesarattu',
      description: 'Green gram dosa.',
      ingredients: ['Moong dal', 'Onion', 'Spices'],
      instructions: ['Make batter.', 'Cook.']
    },
    {
      title: 'Uttapam',
      description: 'Thick pancake.',
      ingredients: ['Dosa batter', 'Vegetables', 'Spices'],
      instructions: ['Spread batter.', 'Top with veggies.']
    },
    {
      title: 'Rava Dosa',
      description: 'Semolina crepe.',
      ingredients: ['Semolina', 'Rice flour', 'Spices'],
      instructions: ['Make batter.', 'Cook.']
    },
    {
      title: 'Poori',
      description: 'Fried bread with curry.',
      ingredients: ['Flour', 'Oil', 'Potatoes', 'Spices'],
      instructions: ['Make dough.', 'Fry.', 'Serve with curry.']
    }
  ],
  'Snacks': [
    {
      title: 'Bonda',
      description: 'Fried potato balls.',
      ingredients: ['Potatoes', 'Flour', 'Spices', 'Oil'],
      instructions: ['Make filling.', 'Coat in batter.', 'Fry.']
    },
    {
      title: 'Bajji',
      description: 'Fried vegetable fritters.',
      ingredients: ['Vegetables', 'Flour', 'Spices', 'Oil'],
      instructions: ['Make batter.', 'Dip veggies.', 'Fry.']
    },
    {
      title: 'Pakoda',
      description: 'Fried snacks.',
      ingredients: ['Flour', 'Vegetables', 'Spices', 'Oil'],
      instructions: ['Make batter.', 'Fry.']
    },
    {
      title: 'Murukku',
      description: 'Crispy spirals.',
      ingredients: ['Rice flour', 'Spices', 'Oil'],
      instructions: ['Make dough.', 'Shape.', 'Fry.']
    },
    {
      title: 'Sundal',
      description: 'Chickpea snack.',
      ingredients: ['Chickpeas', 'Coconut', 'Spices'],
      instructions: ['Cook chickpeas.', 'Temper.']
    },
    {
      title: 'Banana Chips',
      description: 'Fried banana slices.',
      ingredients: ['Bananas', 'Oil', 'Salt'],
      instructions: ['Slice bananas.', 'Fry.']
    },
    {
      title: 'Masala Vada',
      description: 'Spiced lentil fritters.',
      ingredients: ['Lentils', 'Spices', 'Oil'],
      instructions: ['Grind lentils.', 'Fry.']
    },
    {
      title: 'Punugulu',
      description: 'Fried batter balls.',
      ingredients: ['Flour', 'Spices', 'Oil'],
      instructions: ['Make batter.', 'Fry.']
    },
    {
      title: 'Samosa',
      description: 'Fried pastry with filling.',
      ingredients: ['Flour', 'Potatoes', 'Spices', 'Oil'],
      instructions: ['Make dough.', 'Fill.', 'Fry.']
    },
    {
      title: 'Medu Vada',
      description: 'Urad dal fritters.',
      ingredients: ['Urad dal', 'Spices', 'Oil'],
      instructions: ['Grind dal.', 'Fry.']
    }
  ],
  'Sweets': [
    {
      title: 'Payasam',
      description: 'Rice pudding.',
      ingredients: ['Rice', 'Milk', 'Sugar', 'Cardamom'],
      instructions: ['Cook rice in milk.', 'Add sugar.']
    },
    {
      title: 'Mysore Pak',
      description: 'Ghee sweet.',
      ingredients: ['Ghee', 'Sugar', 'Flour'],
      instructions: ['Cook ghee and sugar.', 'Add flour.']
    },
    {
      title: 'Ariselu',
      description: 'Sweet fritters.',
      ingredients: ['Rice flour', 'Jaggery', 'Oil'],
      instructions: ['Make dough.', 'Fry.']
    },
    {
      title: 'Rava Kesari',
      description: 'Semolina sweet.',
      ingredients: ['Semolina', 'Sugar', 'Ghee', 'Saffron'],
      instructions: ['Roast semolina.', 'Add sugar.']
    },
    {
      title: 'Laddu',
      description: 'Sweet balls.',
      ingredients: ['Flour', 'Sugar', 'Ghee', 'Nuts'],
      instructions: ['Make dough.', 'Shape balls.']
    },
    {
      title: 'Bobbatlu',
      description: 'Sweet stuffed flatbread.',
      ingredients: ['Flour', 'Lentils', 'Jaggery'],
      instructions: ['Make filling.', 'Stuff dough.', 'Cook.']
    },
    {
      title: 'Jangri',
      description: 'Sweet spirals.',
      ingredients: ['Flour', 'Sugar', 'Oil'],
      instructions: ['Make batter.', 'Fry.', 'Soak in syrup.']
    },
    {
      title: 'Halwa',
      description: 'Carrot sweet.',
      ingredients: ['Carrots', 'Sugar', 'Ghee'],
      instructions: ['Cook carrots.', 'Add sugar.']
    },
    {
      title: 'Coconut Burfi',
      description: 'Coconut sweet.',
      ingredients: ['Coconut', 'Sugar', 'Ghee'],
      instructions: ['Cook coconut and sugar.']
    },
    {
      title: 'Gulab Jamun',
      description: 'Sweet dumplings.',
      ingredients: ['Milk powder', 'Sugar', 'Rose water'],
      instructions: ['Make dough.', 'Fry.', 'Soak in syrup.']
    }
  ],
  'Pickles': [
    {
      title: 'Mango Pickle',
      description: 'Spicy mango pickle.',
      ingredients: ['Mango', 'Spices', 'Oil', 'Salt'],
      instructions: ['Mix ingredients.', 'Ferment.']
    },
    {
      title: 'Gongura Pickle',
      description: 'Sorrel leaf pickle.',
      ingredients: ['Gongura', 'Spices', 'Oil'],
      instructions: ['Cook leaves.', 'Add spices.']
    },
    {
      title: 'Lemon Pickle',
      description: 'Lemon pickle.',
      ingredients: ['Lemons', 'Spices', 'Oil'],
      instructions: ['Mix.', 'Preserve.']
    },
    {
      title: 'Tomato Pickle',
      description: 'Tomato pickle.',
      ingredients: ['Tomatoes', 'Spices', 'Oil'],
      instructions: ['Cook tomatoes.', 'Add spices.']
    },
    {
      title: 'Onion Chutney',
      description: 'Onion chutney.',
      ingredients: ['Onions', 'Spices', 'Oil'],
      instructions: ['Sauté onions.', 'Blend.']
    },
    {
      title: 'Coconut Chutney',
      description: 'Coconut chutney.',
      ingredients: ['Coconut', 'Chili', 'Garlic'],
      instructions: ['Grind ingredients.']
    },
    {
      title: 'Peanut Chutney',
      description: 'Peanut chutney.',
      ingredients: ['Peanuts', 'Chili', 'Garlic'],
      instructions: ['Roast peanuts.', 'Grind.']
    },
    {
      title: 'Ginger Chutney',
      description: 'Ginger chutney.',
      ingredients: ['Ginger', 'Tamarind', 'Spices'],
      instructions: ['Grind.']
    },
    {
      title: 'Garlic Pickle',
      description: 'Garlic pickle.',
      ingredients: ['Garlic', 'Spices', 'Oil'],
      instructions: ['Mix.', 'Preserve.']
    },
    {
      title: 'Coriander Chutney',
      description: 'Coriander chutney.',
      ingredients: ['Coriander', 'Chili', 'Garlic'],
      instructions: ['Grind.']
    }
  ],
  'Breads': [
    {
      title: 'Chapati',
      description: 'Thin flatbread.',
      ingredients: ['Flour', 'Water', 'Oil'],
      instructions: ['Make dough.', 'Roll.', 'Cook on griddle.']
    },
    {
      title: 'Phulka',
      description: 'Puffed flatbread.',
      ingredients: ['Flour', 'Water', 'Ghee'],
      instructions: ['Make dough.', 'Cook.']
    },
    {
      title: 'Parotta',
      description: 'Layered flatbread.',
      ingredients: ['Flour', 'Oil', 'Water'],
      instructions: ['Make dough.', 'Layer.', 'Cook.']
    },
    {
      title: 'Malabar Parotta',
      description: 'Flaky parotta.',
      ingredients: ['Flour', 'Oil', 'Egg'],
      instructions: ['Make dough.', 'Cook.']
    },
    {
      title: 'Ragi Sangati',
      description: 'Finger millet ball.',
      ingredients: ['Ragi flour', 'Water'],
      instructions: ['Cook flour.', 'Shape.']
    },
    {
      title: 'Jowar Roti',
      description: 'Sorghum flatbread.',
      ingredients: ['Jowar flour', 'Water'],
      instructions: ['Make dough.', 'Cook.']
    },
    {
      title: 'Bajra Roti',
      description: 'Pearl millet flatbread.',
      ingredients: ['Bajra flour', 'Water'],
      instructions: ['Make dough.', 'Cook.']
    },
    {
      title: 'Akki Rotti',
      description: 'Rice flatbread.',
      ingredients: ['Rice flour', 'Onion', 'Spices'],
      instructions: ['Make dough.', 'Cook.']
    },
    {
      title: 'Dibba Rotti',
      description: 'Thick roti.',
      ingredients: ['Rice flour', 'Water'],
      instructions: ['Make dough.', 'Cook.']
    },
    {
      title: 'Puri',
      description: 'Fried bread.',
      ingredients: ['Flour', 'Oil', 'Water'],
      instructions: ['Make dough.', 'Fry.']
    }
  ],
  'Beverages': [
    {
      title: 'Filter Coffee',
      description: 'South Indian coffee.',
      ingredients: ['Coffee', 'Milk', 'Sugar'],
      instructions: ['Brew coffee.', 'Mix with milk.']
    },
    {
      title: 'Buttermilk',
      description: 'Spiced buttermilk.',
      ingredients: ['Buttermilk', 'Spices', 'Coriander'],
      instructions: ['Mix spices.']
    },
    {
      title: 'Panakam',
      description: 'Jaggery drink.',
      ingredients: ['Jaggery', 'Water', 'Spices'],
      instructions: ['Dissolve jaggery.', 'Add spices.']
    },
    {
      title: 'Badam Milk',
      description: 'Almond milk.',
      ingredients: ['Almonds', 'Milk', 'Sugar'],
      instructions: ['Soak almonds.', 'Blend with milk.']
    },
    {
      title: 'Rose Milk',
      description: 'Rose flavored milk.',
      ingredients: ['Milk', 'Rose syrup', 'Sugar'],
      instructions: ['Mix.']
    },
    {
      title: 'Jigarthanda',
      description: 'Sweet drink.',
      ingredients: ['Milk', 'Ice cream', 'Nuts'],
      instructions: ['Layer ingredients.']
    },
    {
      title: 'Tender Coconut Water',
      description: 'Fresh coconut water.',
      ingredients: ['Coconut'],
      instructions: ['Drink.']
    },
    {
      title: 'Horlicks',
      description: 'Malted drink.',
      ingredients: ['Horlicks', 'Milk', 'Sugar'],
      instructions: ['Mix.']
    },
    {
      title: 'Lassi',
      description: 'Sweet yogurt drink.',
      ingredients: ['Yogurt', 'Sugar', 'Cardamom'],
      instructions: ['Blend.']
    },
    {
      title: 'Rasam Vellam',
      description: 'Spiced jaggery water.',
      ingredients: ['Jaggery', 'Water', 'Spices'],
      instructions: ['Dissolve jaggery.', 'Add spices.']
    }
  ],
  'Vegetable Dishes': [
    {
      title: 'Potato Fry',
      description: 'Fried potatoes.',
      ingredients: ['Potatoes', 'Spices', 'Oil'],
      instructions: ['Slice potatoes.', 'Fry with spices.']
    },
    {
      title: 'Brinjal Curry',
      description: 'Eggplant curry.',
      ingredients: ['Eggplant', 'Spices', 'Coconut'],
      instructions: ['Cook eggplant.', 'Add spices.']
    },
    {
      title: 'Beans Poriyal',
      description: 'Stir-fried beans.',
      ingredients: ['Beans', 'Coconut', 'Spices'],
      instructions: ['Cook beans.', 'Temper.']
    },
    {
      title: 'Cabbage Curry',
      description: 'Cabbage curry.',
      ingredients: ['Cabbage', 'Spices', 'Coconut'],
      instructions: ['Cook cabbage.', 'Add spices.']
    },
    {
      title: 'Beetroot Poriyal',
      description: 'Beetroot stir-fry.',
      ingredients: ['Beetroot', 'Coconut', 'Spices'],
      instructions: ['Cook beetroot.', 'Temper.']
    },
    {
      title: 'Okra Fry',
      description: 'Fried okra.',
      ingredients: ['Okra', 'Spices', 'Oil'],
      instructions: ['Slice okra.', 'Fry.']
    },
    {
      title: 'Drumstick Curry',
      description: 'Drumstick curry.',
      ingredients: ['Drumstick', 'Coconut', 'Spices'],
      instructions: ['Cook drumstick.', 'Add curry.']
    },
    {
      title: 'Capsicum Curry',
      description: 'Bell pepper curry.',
      ingredients: ['Capsicum', 'Spices', 'Coconut'],
      instructions: ['Cook capsicum.', 'Add spices.']
    },
    {
      title: 'Ridge Gourd Curry',
      description: 'Ridge gourd curry.',
      ingredients: ['Ridge gourd', 'Spices', 'Coconut'],
      instructions: ['Cook gourd.', 'Add spices.']
    },
    {
      title: 'Snake Gourd Curry',
      description: 'Snake gourd curry.',
      ingredients: ['Snake gourd', 'Spices', 'Coconut'],
      instructions: ['Cook gourd.', 'Add spices.']
    }
  ],
  'Non-Veg': [
    {
      title: 'Hyderabadi Biryani',
      description: 'Spiced meat biryani.',
      ingredients: ['Meat', 'Rice', 'Spices', 'Onion'],
      instructions: ['Cook meat.', 'Layer with rice.', 'Dum cook.'],
      diet: 'Non-Veg'
    },
    {
      title: 'Chettinad Chicken Curry',
      description: 'Spicy chicken curry.',
      ingredients: ['Chicken', 'Spices', 'Coconut', 'Onion'],
      instructions: ['Brown chicken.', 'Add spices.']
    },
    {
      title: 'Nellore Fish Curry',
      description: 'Fish curry.',
      ingredients: ['Fish', 'Spices', 'Tamarind', 'Coconut'],
      instructions: ['Cook fish.', 'Add curry.']
    },
    {
      title: 'Prawn Fry',
      description: 'Fried prawns.',
      ingredients: ['Prawns', 'Spices', 'Oil'],
      instructions: ['Marinate prawns.', 'Fry.']
    },
    {
      title: 'Mutton Pepper Fry',
      description: 'Spicy mutton fry.',
      ingredients: ['Mutton', 'Pepper', 'Spices', 'Oil'],
      instructions: ['Cook mutton.', 'Fry with spices.']
    },
    {
      title: 'Andhra Kodi Pulusu',
      description: 'Chicken curry.',
      ingredients: ['Chicken', 'Spices', 'Tamarind'],
      instructions: ['Cook chicken.', 'Add spices.']
    },
    {
      title: 'Chicken 65',
      description: 'Spicy fried chicken.',
      ingredients: ['Chicken', 'Spices', 'Oil'],
      instructions: ['Marinate.', 'Fry.']
    },
    {
      title: 'Mutton Biryani',
      description: 'Mutton biryani.',
      ingredients: ['Mutton', 'Rice', 'Spices'],
      instructions: ['Cook mutton.', 'Layer with rice.']
    },
    {
      title: 'Fish Fry',
      description: 'Fried fish.',
      ingredients: ['Fish', 'Spices', 'Oil'],
      instructions: ['Marinate.', 'Fry.']
    },
    {
      title: 'Crab Curry',
      description: 'Crab in curry.',
      ingredients: ['Crab', 'Spices', 'Coconut'],
      instructions: ['Cook crab.', 'Add curry.']
    }
  ]
};

export default recipes;