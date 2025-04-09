const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    product_id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category_id: { type: String, required: true },
    price: { type: String, required: true },
    image_url: { type: String, required: true },
    added_by: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;