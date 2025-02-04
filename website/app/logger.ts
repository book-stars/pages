import pino from "pino";

const config = {
    level: import.meta.env.LOG_LEVEL || 'debug',
    transport: {
        targets: [

        ]
    }

} as any

if (import.meta.env.DEV) {
    config.transport.targets.push({
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    })
} else {
    config.transport.targets.push({
        target: 'pino/file',
        options: { destination: 1 } // this writes to STDOUT
    })
}

console.log("Pino config", config)
export const logger = pino(config);

export default logger