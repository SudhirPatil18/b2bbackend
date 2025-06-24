const express = require('express');
const router = express.Router();
const farmerOrderController = require('../controllers/farmerOrderController');

// Routes for farmer orders
router.get('farmerOrder/orders', farmerOrderController.getAllOrders);
router.get('/orders/:id', farmerOrderController.getOrderById);
router.post('/orders', farmerOrderController.createOrder);
router.put('/orders/:id', farmerOrderController.updateOrder);
router.delete('/orders/:id', farmerOrderController.deleteOrder);
router.delete('/cancel-orders/:id', farmerOrderController.cancelOrder);
router.patch('/orders/:id/accept', farmerOrderController.acceptOrder);
2

module.exports = router;
