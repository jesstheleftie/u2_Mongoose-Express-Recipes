const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Cuisine = new Schema(
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cuisines", Cuisine);
