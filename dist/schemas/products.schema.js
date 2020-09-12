"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productsSchema = new mongoose_1.Schema({
    product_name: { type: String, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Categories', required: true },
    image: [{ type: String, required: true }],
    price: { type: Number, required: true },
    best_seller: { type: Boolean, required: true },
    qualification: { type: Number },
    description: { type: String, required: true },
    color: { type: String },
    stock: { type: Number, required: true },
});
exports.default = mongoose_1.model('Products', productsSchema);
