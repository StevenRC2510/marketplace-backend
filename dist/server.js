"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
var app_1 = __importDefault(require("./app"));
exports.createServer = function () {
    return app_1.default.listen(app_1.default.get('port'), function () {
        console.log('server on port', app_1.default.get('port'));
    });
};
