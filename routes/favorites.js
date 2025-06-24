const express = require('express');
const router = express.Router();
const favoritesController=require('../controllers/favoritesController')
// Route to fetch orders
router.post('/',favoritesController.addfavorites)
router.get('/',favoritesController.getfavorites)

module.exports = router;
