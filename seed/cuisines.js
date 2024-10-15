const db = require('../db');
const Cuisine = require('../models/cuisine');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const cuisines = [
    { name: 'Japanese', origin: 'Japan' },
    { name: 'Korean', origin: 'Korea' },
    { name: 'Chinese', origin: 'China' },
  ];
  await Cuisine.insertMany(cuisines);
  console.log('Created some cuisines!');
};
const run = async()=>{
    await main ();
    db.close();
};

run();