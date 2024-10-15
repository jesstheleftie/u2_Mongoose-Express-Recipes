const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Recipe = new Schema({
  name: { type: String, required: true },
  difficulty: { type: String, required: true }, 
  ingredients: [{ name: String, quantity: String }],
  vegan: { type: Boolean, default: false },
  glutenFree: { type: Boolean, default: false },
  halal: { type: Boolean, default: false },
  kosher: { type: Boolean, default: false },
  ovenTemperature: {type: Number,default: true},
  cookingTime:{type: String, default:true},
  cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
  directions: [{ type: Schema.Types.ObjectId, ref: 'Direction' }]
}, 
{ timestamps: true });

module.exports = mongoose.model('recipes', Recipe)