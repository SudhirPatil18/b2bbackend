const express = require('express');
const router = express.Router();
const {
  getShopFarmerOrders,
  createShopFarmerOrder,
  deleteShopFarmerOrder,
  acceptOrder,
  cancelOrder,
  updateOrderStatus,
  deleteOrder
} = require('../controllers/shopFarmerOrderController');

// Define routes
router.get('/', getShopFarmerOrders);
router.post('/', createShopFarmerOrder);
router.delete('/:id', deleteShopFarmerOrder);

// Accept an order
router.patch('/:orderId/accept', acceptOrder);

// Cancel an order
router.patch('/:orderId/cancel', cancelOrder);

// Update order status (progress/completed)
router.patch('/:orderId', updateOrderStatus);

// Delete an order
router.delete('/:orderId', deleteOrder);

module.exports = router;
