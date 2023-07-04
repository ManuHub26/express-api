const mongoose = require('mongoose');

const foodtruckSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialite: {
        type: String,
        required: true
    },
    menu: {
        type: [],
        required: true
    }
})

const Foodtruck = mongoose.model('Foodtruck', foodtruckSchema);

module.exports = Foodtruck;