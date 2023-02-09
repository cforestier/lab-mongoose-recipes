const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },

  ingredients: {
    type: [String],
  },

  cuisine: {
    type: String,
    required: true,
  },
  dishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  creator: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

/* **title** - Type `String`. It should be required and unique.
- **level** - Type `String`. Can be one of the following values: _Easy Peasy_ - _Amateur Chef_ - _UltraPro Chef_ (remember the `enum` validator :wink:).
- **ingredients** - Type `Array` of `String`s (represented as `[ String ]`).
- **cuisine** - Type `String`. Should be required.
- **dishType** - Type `String`. Possible values: _breakfast_, _main_course_, _soup_, _snack_, _drink_, _dessert_ or _other_.
- **image** - Type `String`. Default value: _"https://images.media-allrecipes.com/images/75131.jpg"_.
- **duration** - Type `Number`. The minimum value should be 0.
- **creator** - Type `String`.
- **created** - Type `Date`. By default, today. */

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe
