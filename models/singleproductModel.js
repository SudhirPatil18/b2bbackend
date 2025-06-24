const mongoose = require('mongoose');

const singleproductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    sold: { type: Number, required: true },
    size: { type: String, required: true },
    quantity: { type: Number, required: true },
    available: { type: String, required: true },
    image: { type: String, required: true },
    token:{type:String,required:true},
    shoptoken: { type: String, required: true }
});

module.exports = mongoose.model('SingleProduct', singleproductSchema);
