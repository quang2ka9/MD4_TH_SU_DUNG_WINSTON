import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.combine(
      winston.format.splat(),
      winston.format.timestamp({
          format: 'YYYY_MM_DD HH:mm:ss'
      }),
      winston.format.colorize(),
      winston.format.printf(
          log => {
             if(log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
             return `[${log.timestamp}] [${log.level} ${log.message}`;
          },
      ),
  ),
    transports:[
        new winston.transports.Console(),
    ],
})