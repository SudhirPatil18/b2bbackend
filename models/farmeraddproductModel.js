const mongoose = require('mongoose');

const farmerAddProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  productCategory: {
    type: String,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true // or false, depending on your requirement
  },
  farmername: {
    type: String,
    required: true // or false, depending on your requirement
  }
});

// Check if the model is already compiled before defining it
const FarmerAddProduct = mongoose.models.FarmerAddProduct || mongoose.model('FarmerAddProduct', farmerAddProductSchema);

module.exports = FarmerAddProduct;
