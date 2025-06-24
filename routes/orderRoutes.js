const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to fetch orders
router.get('/readorders', orderController.readOrders);
router.post('/readorders/add', orderController.postOrders);
module.exports = router;
