const mongoose = require('mongoose');

const farmerOrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  orders: { type: String, required: true },
  status: { type: String, default: 'pending' },  // Add this field
}, { timestamps: true });

module.exports = mongoose.model('FarmerOrder', farmerOrderSchema);
