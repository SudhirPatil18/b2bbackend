const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    farmername: {
        type: String,
        required: true,
    },
    farmerusername: {
        type: String,
        required: true,
    },
    productprice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    streetaddress: {
        type: String,
        required: true,
    },
    apartment: {
        type: String,
    },
    towncity: {
        type: String,
        required: true,
    },
    postcodezip: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    emailaddress: {
        type: String,
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },
    terms: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('ShopBuyOrders', orderSchema);
