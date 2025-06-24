const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product:String,
    quantity: Number,
    price: Number,
    customerName: String,
    mobileNumber: String,
    email: String,
    address: String,
    payment: String,
    // status: String ,// In process, Delivered, Successful
    shoptoken:String
});

module.exports = mongoose.model('Order', orderSchema);
