const router = require('express').Router();
const basicController = require('../controllers/basicController');

router.get('/greetings/:name', (req, res) => {
    res.send(`Bonjour ${req.params.name}`)
})

router.get('/data', basicController.getDatas);
// router.post('/add', basicController.addDatas);
// router.put('/:id', basicController.updateData);
// router.delete('/:id', basicController.deleteData);

module.exports = router;