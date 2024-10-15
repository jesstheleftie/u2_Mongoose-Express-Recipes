const Direction = require('../models/direction');
const Recipe = require('../models/recipe')

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(directions)
    } catch (error) {
        return res.send(error.message);
    }
}

const getDirectionByRecipeName = async (req,res) =>{
    try{
        const recipe = await Recipe.findOne({name: req.params.recipeName})
        if (!recipe){
            return res.status(404).json({message:'Recipe not found'})
        }

        const directions = await Direction.find({recipe: recipe._id})
        res.json(directions)
    }catch(error){
        res.json({error: error.message})
    }
}

const createDirection = async (req, res) => {
    try {
      const direction = new Direction (req.body);
      await direction.save();
      return res.status(201).json({ direction });
    } catch (error) {
      return res.json({ erorr: error.message });
    }
  };

  const updateDirection = async (req, res)=>{
    try{
let {id} = req.params
let direction= await Direction.findByIdAndUpdate(id, req.body, {new:true})
if(direction){
    return res.status(200).json(direction)
}
throw new Error("Direction not found")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteDirection = async (req,res)=>{
    try{
const {id} = req.params
const deleted = await Direction.findByIdAndDelete(id)
if (deleted){
    return res.status(200).send("Direction deleted")
}
throw new Error("Direction not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllDirections,
    getDirectionByRecipeName,
    createDirection,
    updateDirection,
    deleteDirection
}
