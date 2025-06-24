const express = require('express');
const router = express.Router();
const ShopCheckoutController = require('../controllers/ShopCheckoutController');

// Route to create a new order (POST request)
router.post('/checkout', ShopCheckoutController.createOrder);

// Route to get all orders or filter by fields (GET request)
router.get('/orders', ShopCheckoutController.getOrders);

// Route to get a specific order by ID (GET request)
router.get('/orders/:id', ShopCheckoutController.getOrderById);

// Route to update an order by ID (PUT request)
router.put('/orders/:id', ShopCheckoutController.updateOrder);

// Route to delete an order by ID (DELETE request)
router.delete('/orders/:id', ShopCheckoutController.deleteOrder);

module.exports = router;
