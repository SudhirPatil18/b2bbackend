const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  ProductName: { type: String, required: true },
  quantity: { type: Number, required: true }, // Changed to Number
  price: { type: Number, required: true }, // Changed to Number
  shoptoken: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  country: { type: String, required: true },
  streetaddress: { type: String, required: true },
  apartment: { type: String },
  towncity: { type: String, required: true },
  postcodezip: { type: String, required: true },
  phone: { type: String, required: true },
  emailaddress: { type: String, required: true },
  payment_method: { type: String, required: true },
  terms: { type: Boolean, required: true },
  status:{type:String,default:'confirmed'}
});

module.exports = mongoose.model('Checkout', checkoutSchema);
