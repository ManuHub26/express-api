const FoodtruckSchema = require('../models/foodtruckModel');

const getFoodtrucks = (req, res) => {
    FoodtruckSchema.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err))
}

const addFoodtruck = (req, res) => {
    const newFoodtruck = new FoodtruckSchema(req.body)
    newFoodtruck.save()
        .then(res.status(200).json({message: "New foodtruck added", newFoodtruck}))
        .catch(err => console.log(err))
}

const deleteFoodtruck = (req, res) => {
    FoodtruckSchema.deleteOne({
        _id: req.params.id
    })
        .then(() => res.status(201).json({message: "foodtruck deleted"}))
        .catch(err => console.error(err))
}

const updateFoodtruck = (req, res) => {
    FoodtruckSchema.updateOne({
        _id: req.params.id
    }, {
        $set : {
            "name": req.body.name
        }
    })
        .then(() => res.status(201).json({message: "foodtruck updated"}))
        .catch(err => console.error(err))
}

module.exports = {getFoodtrucks, addFoodtruck, deleteFoodtruck, updateFoodtruck};

