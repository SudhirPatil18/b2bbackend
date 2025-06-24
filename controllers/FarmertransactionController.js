const FarmerTransaction = require('../models/FarmertransactionModel');

// Create a new farmer transaction
exports.postTransactions = async (req, res) => {
    try {
        const { username, currentBalance, totalOrders, totalRevenue } = req.body;
        
        // Create a new farmer transaction document
        const newTransaction = new FarmerTransaction({
            username,
            currentBalance,
            totalOrders,
            totalRevenue
        });
        await newTransaction.save(); // Save to the database

        res.status(201).json({
            message: 'Transaction created successfully',
            transaction: newTransaction
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating transaction', error });
    }
};

// Get all farmer transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await FarmerTransaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};

// Update a farmer transaction by ID
exports.putTransactions = async (req, res) => {
    const transactionId = req.params.id;
    const updateData = req.body;

    try {
        const updatedTransaction = await FarmerTransaction.findByIdAndUpdate(transactionId, updateData, { new: true });

        if (!updatedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        res.status(200).json({
            message: 'Transaction updated successfully',
            transaction: updatedTransaction
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating transaction', error });
    }
};

// Delete a farmer transaction by ID (optional)
exports.deleteTransaction = async (req, res) => {
    const transactionId = req.params.id;

    try {
        const deletedTransaction = await FarmerTransaction.findByIdAndDelete(transactionId);

        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }

        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting transaction', error });
    }
};
