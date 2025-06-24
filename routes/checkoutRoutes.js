const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController'); // Update the path accordingly

// Route for creating a checkout
router.post('/checkout', checkoutController.createCheckout);

// Route for retrieving all checkout data
router.get('/checkout', checkoutController.checkoutData);

// Route for canceling an order
router.put('/checkout/cancelOrders/:orderId', checkoutController.cancelOrder);

module.exports = router;
