// models/shopPayRequestModel.js
const mongoose = require('mongoose');

const shopPayRequestSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  shopPhone: { type: String, required: true },
  shopAddress: { type: String, required: true },
  verificationStatus: { type: String, required: true },
  requestedAmount: { type: Number, required: true },
  remainingAmount: { type: Number, required: true },
  bankName: { type: String, required: true },
  ifscCode: { type: String, required: true },
  holderName: { type: String, required: true },
  branchName: { type: String, required: true },
  passbookPhoto: { type: String } // Store the file path
}, { timestamps: true });

const ShopPayRequest = mongoose.model('ShopPayRequest', shopPayRequestSchema);

module.exports = ShopPayRequest;
