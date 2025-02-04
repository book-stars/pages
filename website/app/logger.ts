import pino from "pino";

const config = {
    level: import.meta.env.LOG_LEVEL || 'debug',
} as any

if (import.meta.env.DEV) {
    config.transport = {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
}
export const logger = pino(config);

export default logger