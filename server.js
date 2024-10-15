const express = require('express');
const db = require('./db');
const cuisineController = require ('./controllers/cuisineController')
const directionController = require('./controllers/directionController')
const recipeController = require('./controllers/recipeController')
// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))
//cusine CRUD
app.put('/cuisines/:id', cuisineController.updateCuisine)
app.delete('cusines/:id', cuisineController.deleteCuisine)
app.get('/cuisines/:cuisineName', cuisineController.getCuisineByName)
app.get('/cuisines', cuisineController.getAllCuisines)
app.post('/cuisines', cuisineController.createCuisine)
//direction CRUD
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/directions/:id', directionController.deleteDirection)
app.get('/recipes/:recipeName/directions', directionController.getDirectionByRecipeName)
app.get('/directions', directionController.getAllDirections)
app.post('/directions', directionController.createDirection)
//recipe CRUD
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)
app.get('/recipes/:recipeName', recipeController.getRecipeByName)
app.get('/recipes', recipeController.getAllRecipes)
app.post('/recipes', recipeController.createRecipe)
