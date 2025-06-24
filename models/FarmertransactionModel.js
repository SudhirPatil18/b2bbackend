const mongoose = require('mongoose');

const farmerTransactionSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true,
        default: 0 // Default value of 0 for current balance
    },
    totalOrders: {
        type: Number,
        required: true,
        default: 0 // Default value of 0 for total orders
    },
    totalRevenue: {
        type: Number,
        required: true,
        default: 0 // Default value of 0 for total revenue
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

const FarmerTransaction = mongoose.model('FarmerTransaction', farmerTransactionSchema);

module.exports = FarmerTransaction;
