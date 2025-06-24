const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define route to fetch Razorpay payment history
router.get('/payment-history', paymentController.getPaymentHistory);

module.exports = router;
