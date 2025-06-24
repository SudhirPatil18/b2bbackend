const mongoose = require('mongoose');

const payRequestFarmerSchema = new mongoose.Schema({
    farmerName: { type: String, required: true },
    farmerPhone: { type: String, required: true },
    farmerAddress: { type: String, required: true },
    verificationStatus: { type: String, required: true },
    requestedAmount: { type: Number, required: true },
    remainingAmount: { type: Number, required: true },
    bankName: { type: String, required: true },
    ifscCode: { type: String, required: true },
    holderName: { type: String, required: true },
    branchName: { type: String, required: true },
    passbookPhoto: { type: String, required: true }
}, { timestamps: true }); // Add this line to include createdAt and updatedAt fields

module.exports = mongoose.model('PayRequestFarmer', payRequestFarmerSchema);
