const router = require('express').Router();
const foodtruckCtrl = require('../controllers/foodtruckController');

router.get('/', foodtruckCtrl.getFoodtrucks);
router.post('/add', foodtruckCtrl.addFoodtruck);
router.delete('/delete/:id', foodtruckCtrl.deleteFoodtruck);
router.put('/update/:id', foodtruckCtrl.updateFoodtruck);

module.exports = router;