const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true ,unique:true },
    aadharCard: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
