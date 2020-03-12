"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = __importDefault(require("winston"));
var config_1 = require("./config");
var logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston_1.default.transports.File({ filename: config_1.config.ERROR_LOG, level: 'error' }),
        new winston_1.default.transports.File({ filename: config_1.config.WARNING_LOG, level: 'warning' }),
        new winston_1.default.transports.File({ filename: config_1.config.INFO_LOG, level: 'info' }),
    ]
});
exports.default = logger;
