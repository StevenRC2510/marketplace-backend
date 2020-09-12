"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var products_routes_1 = __importDefault(require("./routes/products.routes"));
var categories_routes_1 = __importDefault(require("./routes/categories.routes"));
var app = express_1.default();
app.set('port', process.env.PORT || 4000);
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/', function (req, res) {
    return res.send("the api is at http://localhost:" + app.get('port'));
});
app.use('/api/v1/products', products_routes_1.default);
app.use('/api/v1/categories', categories_routes_1.default);
exports.default = app;
