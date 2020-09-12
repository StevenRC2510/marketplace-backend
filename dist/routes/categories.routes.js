"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var categories_controller_1 = require("../controllers/categories.controller");
var router = express_1.Router();
router.route('/').get(categories_controller_1.getCategories).post(categories_controller_1.crateCategory);
router.route('/:id').delete(categories_controller_1.deleteCategory);
exports.default = router;
