const mongoose = require('mongoose');

const ShopFarmerOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  orders: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  shopusername: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: { 
    type: String,
   default: 'pending' }, 
  farmerusername: { 
    type: String,
   default: 'unknown' }, 
});

module.exports = mongoose.model('ShopFarmerOrder', ShopFarmerOrderSchema);
