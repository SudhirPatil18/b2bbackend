const express = require('express');
const router = express.Router();
const singleproductController = require('../controllers/singleproductController');

router.post('/add', singleproductController.addSingleProduct);
router.get('/cart', singleproductController.getCartItems);
router.delete('/cart/:id', singleproductController.deleteCartItem);


module.exports = router;
