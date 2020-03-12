"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Required External Modules
 */
var config_1 = require("./config");
var logger_1 = __importDefault(require("./logger"));
//we are making .env configurations accessible.
/**
 * App Variables
 */
if (!config_1.config.PORT) {
    logger_1.default.error("Please define PORT to run application");
    process.exit(1);
}
logger_1.default.info("App run on port" + config_1.config.PORT);
/**
 *  App Configuration
 */
/**
 * Server Activation
 */
/**
 * Webpack HMR Activation
 */ 
