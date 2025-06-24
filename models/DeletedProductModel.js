// models/deletedItemModel.js
const mongoose = require('mongoose');

const deletedItemSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    price: Number,
    rating: Number,
    reviews: Number,
    sold: Number,
    size: String,
    quantity: Number,
    available: String,
    image: String,
    token: String,
    shoptoken: String,
    status:{type:String,default:'confirmed'},
    deletedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('DeletedItem', deletedItemSchema);
