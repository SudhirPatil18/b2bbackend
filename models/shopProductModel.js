const mongoose = require('mongoose');

const shopProductSchema = new mongoose.Schema({
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
  Shoptoken: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('ShopProduct', shopProductSchema);
