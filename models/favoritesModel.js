const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required:true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    token:{type:String,required:true}
});

module.exports = mongoose.model('favorites', favoritesSchema);
