const Cuisine = require("../models/cuisine");

const getAllCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.find();
    res.json(cuisines);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCuisineByName = async (req, res) => {
  try {
    const { cuisineName } = req.params;
    const cuisine = await Cuisine.findOne({ name: cuisineName });

    if (cuisine) {
      res.status(200).json(cuisine);
    } else {
      res.status(404).json({ message: "Cuisine not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const createCuisine = async (req, res) => {
  try {
    const cuisine = new Cuisine(req.body);
    console.log("req.body", req.body, "cuisine", cuisine);
   let saved = await cuisine.save();
   console.log('saved',saved)
    return res.status(201).json({ cuisine });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

const updateCuisine = async (req, res)=>{
    try{
let {id} = req.params
let cuisine= await Cuisine.findByIdAndUpdate(id, req.body, {new:true})
if(cusine){
    return res.status(200).json(cuisine)
}
throw new Error("Cuisine not found")
    }catch (error){
        return res.status(500).send(error.message)
    }
}

const deleteCuisine = async (req,res)=>{
    try{
const {id} = req.params
const deleted = await Cuisine.findByIdAndDelete(id)
if (deleted){
    return res.status(200).send("Cuisine deleted")
}
throw new Error("Cuisine not found")
    }catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
  getAllCuisines,
  getCuisineByName,
  createCuisine,
  updateCuisine,
  deleteCuisine
};
