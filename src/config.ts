import * as dotenv from 'dotenv'

dotenv.config();

export const config = {
    "APP_NAME": process.env.APP_NAME,
    "PORT": process.env.PORT,
    "ERROR_LOG": process.env.ERROR_LOG,
    "WARNING_LOG": process.env.WARNING_LOG, 
    "INFO_LOG": process.env.INFO_LOG,
  };