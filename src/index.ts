/**
 * Required External Modules
 */
import { config }   from './config'
import express      from 'express';
import cors         from 'cors';
import helmet       from 'helmet';
import logger       from './logger'

//we are making .env configurations accessible.


/**
 * App Variables
 */

if (!config.PORT) {
    logger.error("Please define PORT to run application")
    process.exit(1);
}
logger.info("App run on port " + config.PORT)

/**
 *  App Configuration
 */



/**
 * Server Activation
 */

/**
 * Webpack HMR Activation
 */