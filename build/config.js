"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
    "APP_NAME": process.env.APP_NAME,
    "PORT": process.env.PORT,
    "ERROR_LOG": process.env.ERROR_LOG,
    "WARNING_LOG": process.env.WARNING_LOG,
    "INFO_LOG": process.env.INFO_LOG,
};
