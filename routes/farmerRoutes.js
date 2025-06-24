const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');


router.post('/farmers', farmerController.registerFarmer);
router.post('/farmers/login', farmerController.loginFarmer);
router.get('/farmers', farmerController.getFarmers);
router.delete('/farmers/:id', farmerController.deleteFarmer);
router.put('/update-password/:phone', farmerController.updatePassword);

module.exports = router;
