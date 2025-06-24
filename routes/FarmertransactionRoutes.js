const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/FarmertransactionController');

// Route to create a new farmer transaction (POST)
router.post('/transactions', transactionController.postTransactions);

// Route to get all farmer transactions (GET)
router.get('/transactions', transactionController.getTransactions);

// Route to update a farmer transaction by ID (PUT)
router.put('/transactions/:id', transactionController.putTransactions);

// (Optional) Route to delete a farmer transaction by ID (DELETE)
router.delete('/transactions/:id', transactionController.deleteTransaction);

module.exports = router;
