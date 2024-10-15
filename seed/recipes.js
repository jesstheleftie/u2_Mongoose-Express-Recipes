const db = require('../db');
const Recipe = require('../models/recipe')
const Cuisine = require('../models/cuisine');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const japaneseCuisine = await Cuisine.findOne({ name: 'Japanese' });
    const koreanCuisine = await Cuisine.findOne({ name: 'Korean' });
    const chineseCuisine = await Cuisine.findOne({ name: 'Chinese' });
  const recipes = [
    {
        name: 'Sushi',
        difficulty: 'Medium',
        ingredients: [{ name: 'Rice', quantity: '1 cup' }, { name: 'Nori', quantity: '5 sheets' }],
        vegan: false,
        glutenFree: true,
        cuisine: japaneseCuisine._id,
      },
      {
        name: 'Ramen',
        difficulty: 'Hard',
        ingredients: [{ name: 'Noodles', quantity: '200g' }, { name: 'Broth', quantity: '500ml' }],
        vegan: false,
        glutenFree: false,
        cuisine: japaneseCuisine._id,
      },
      {
        name: 'Tempura',
        difficulty: 'Medium',
        ingredients: [{ name: 'Shrimp', quantity: '10 pcs' }, { name: 'Flour', quantity: '100g' }],
        vegan: false,
        glutenFree: false,
        cuisine: japaneseCuisine._id,
      },
      
      
      {
        name: 'Kimchi',
        difficulty: 'Easy',
        ingredients: [{ name: 'Cabbage', quantity: '1 head' }, { name: 'Chili', quantity: '50g' }],
        vegan: true,
        glutenFree: true,
        cuisine: koreanCuisine._id,
      },
      {
        name: 'Bibimbap',
        difficulty: 'Medium',
        ingredients: [{ name: 'Rice', quantity: '1 cup' }, { name: 'Vegetables', quantity: '200g' }],
        vegan: true,
        glutenFree: true,
        cuisine: koreanCuisine._id,
      },
      {
        name: 'Tteokbokki',
        difficulty: 'Easy',
        ingredients: [{ name: 'Rice cakes', quantity: '200g' }, { name: 'Gochujang', quantity: '50g' }],
        vegan: true,
        glutenFree: true,
        cuisine: koreanCuisine._id,
      },
      
    
      {
        name: 'Dumplings',
        difficulty: 'Hard',
        ingredients: [{ name: 'Flour', quantity: '200g' }, { name: 'Pork', quantity: '300g' }],
        vegan: false,
        glutenFree: false,
        cuisine: chineseCuisine._id,
      },
      {
        name: 'Sweet and Sour Pork',
        difficulty: 'Medium',
        ingredients: [{ name: 'Pork', quantity: '300g' }, { name: 'Pineapple', quantity: '50g' }],
        vegan: false,
        glutenFree: false,
        cuisine: chineseCuisine._id,
      },
      {
        name: 'Kung Pao Chicken',
        difficulty: 'Medium',
        ingredients: [{ name: 'Chicken', quantity: '200g' }, { name: 'Peanuts', quantity: '50g' }],
        vegan: false,
        glutenFree: false,
        cuisine: chineseCuisine._id,
      }
    ];
  await Recipe.insertMany(recipes);
  console.log('Created some cuisines!');
};
const run = async()=>{
    await main ();
    db.close();
};

run();