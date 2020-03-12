import winston          from 'winston'
import fs               from 'fs'
import { config }       from './config'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: config.ERROR_LOG, level: 'error' }),
      new winston.transports.File({ filename: config.WARNING_LOG, level: 'warning' }),
      new winston.transports.File({ filename: config.INFO_LOG, level: 'info' }),
    ]
  });

export default logger