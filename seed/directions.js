const db = require('../db');
const Direction = require('../models/direction')
const Recipe = require('../models/recipe');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const sushiRecipe = await Recipe.findOne({ name: 'Sushi' });
    const ramenRecipe = await Recipe.findOne({ name: 'Ramen' });
    const tempuraRecipe = await Recipe.findOne({ name: 'Tempura' });
    const kimchiRecipe = await Recipe.findOne({ name: 'Kimchi' });
    const bibimbapRecipe = await Recipe.findOne({ name: 'Bibimbap' });
    const tteokbokkiRecipe = await Recipe.findOne({ name: 'Tteokbokki' });
    const dumplingsRecipe = await Recipe.findOne({ name: 'Dumplings' });
    const sweetSourPorkRecipe = await Recipe.findOne({ name: 'Sweet and Sour Pork' });
    const kungPaoChickenRecipe = await Recipe.findOne({ name: 'Kung Pao Chicken' });
  const directions = [
    { step: 1, instruction: 'Cook rice', recipe: sushiRecipe._id },
    { step: 2, instruction: 'Place nori on a mat', recipe: sushiRecipe._id },
    { step: 3, instruction: 'Roll sushi', recipe: sushiRecipe._id },

    { step: 1, instruction: 'Prepare broth', recipe: ramenRecipe._id },
    { step: 2, instruction: 'Boil noodles', recipe: ramenRecipe._id },
    { step: 3, instruction: 'Serve with toppings', recipe: ramenRecipe._id },

    { step: 1, instruction: 'Dip shrimp in batter', recipe: tempuraRecipe._id },
    { step: 2, instruction: 'Deep fry shrimp', recipe: tempuraRecipe._id },

   
    { step: 1, instruction: 'Cut cabbage', recipe: kimchiRecipe._id },
    { step: 2, instruction: 'Mix with chili', recipe: kimchiRecipe._id },
    { step: 3, instruction: 'Let ferment', recipe: kimchiRecipe._id },

    { step: 1, instruction: 'Cook rice', recipe: bibimbapRecipe._id },
    { step: 2, instruction: 'Prepare vegetables', recipe: bibimbapRecipe._id },
    { step: 3, instruction: 'Assemble bowl', recipe: bibimbapRecipe._id },

    { step: 1, instruction: 'Cook rice cakes', recipe: tteokbokkiRecipe._id },
    { step: 2, instruction: 'Mix with sauce', recipe: tteokbokkiRecipe._id },

    { step: 1, instruction: 'Prepare dumpling dough', recipe: dumplingsRecipe._id },
    { step: 2, instruction: 'Make dumpling filling', recipe: dumplingsRecipe._id },
    { step: 3, instruction: 'Steam dumplings', recipe: dumplingsRecipe._id },

    { step: 1, instruction: 'Prepare pork', recipe: sweetSourPorkRecipe._id },
    { step: 2, instruction: 'Stir fry with pineapple', recipe: sweetSourPorkRecipe._id },

    { step: 1, instruction: 'Marinate chicken', recipe: kungPaoChickenRecipe._id },
    { step: 2, instruction: 'Stir fry with peanuts', recipe: kungPaoChickenRecipe._id }
  ];
  
  await Direction.insertMany(directions);
  console.log('Created some directions!');
};
const run = async()=>{
    await main ();
    db.close();
};

run();