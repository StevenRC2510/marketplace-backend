"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_controller_1 = require("../controllers/products.controller");
var router = express_1.Router();
router.post('/', products_controller_1.crateProduct);
router.get('/', products_controller_1.getProducts);
router.get('/:id', products_controller_1.getProduct);
exports.default = router;
