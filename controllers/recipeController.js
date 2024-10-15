const Recipe = require('../models/recipe');

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeByName = async (req, res) =>{
    try{
        const recipe = await Recipe.findOne({name: req.params.recipeName})
        if (recipe) {
            res.json(recipe)
        } else {
            res.json({message: 'Recipe not found!'})
        }
    } catch (error){
        res.json({error: 'Server Error'})
    }

}

const createRecipe = async (req, res) => {
    try {
      const recipe = new Recipe(req.body);
      await recipe.save();
      return res.status(201).json({ recipe });
    } catch (error) {
      return res.json({ erorr: error.message });
    }
  };
    
  const updateRecipe = async (req, res)=>{
    try{
let {id} = req.params
let recipe= await Recipe.findByIdAndUpdate(id, req.body, {new:true})
if(recipe){
    return res.status(200).json(recipe)
}
throw new Error("Recipe not found")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteRecipe = async (req,res)=>{
    try{
const {id} = req.params
const deleted = await Recipe.findByIdAndDelete(id)
if (deleted){
    return res.status(200).send("Recipe deleted")
}
throw new Error("Recipe not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllRecipes,
    getRecipeByName,
    createRecipe,
    updateRecipe,
    deleteRecipe
}