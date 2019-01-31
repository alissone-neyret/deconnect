const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');

const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, 'error.log');

const logger = createLogger({
  // change level if in dev environment versus production
  level: 'info',
  format: format.combine(
    format.label({ label: path.basename(module.parent.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message} ${info.sqlMessage} ${info.sql}`
        )
      )
    }),
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message} ${info.sqlMessage} ${info.sql}`
        )
      )
    })
  ]
});

module.exports = logger;
