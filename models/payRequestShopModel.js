const mongoose = require('mongoose');

const payRequestShopSchema = new mongoose.Schema({
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
  passbookPhoto: { type: String, required: true },
});

const PayRequestShop = mongoose.model('PayRequestShop', payRequestShopSchema);

module.exports = PayRequestShop;