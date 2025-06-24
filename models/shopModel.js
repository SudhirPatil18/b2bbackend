const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true, unique:true },
    shopPhoto: { type: String },
    aadharCard: { type: String },
    panCard: { type: String },
    idVerification: { type: String },
    phoneVerification: { type: String },
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    status: { type: String, required: false }
}, { timestamps: true });

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
