"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var categoriesSchema = new mongoose_1.Schema({
    category_name: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
});
exports.default = mongoose_1.model('Categories', categoriesSchema);
