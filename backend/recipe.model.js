const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recipe = new Schema({
    recipe_name: {
        type: String
    },
    recipe_description: {
        type: String
    },
    recipe_ingredients: {
        type: String
    },
    recipe_procedure: {
        type: String
    },
});

module.exports = mongoose.model('Recipe', Recipe);