import pino from "pino";
// import pretty from 'pino-pretty'
// const stream = pretty({
//     colorize: true
// })
const config = {
    level: import.meta.env.LOG_LEVEL || 'debug',
    transport: {
        targets: [
        ]
    }

} as any

// if (import.meta.env.DEV) {
config.transport.targets.push({
    target: 'pino-pretty',
    translateTime: true,

    options: {
        colorize: true,
        destination: 1
    }
})
// } else {
// config.transport.targets.push({
//     target: 'pino/file',
//     options: { destination: 1 } // this writes to STDOUT
// })
// }


export const logger = pino(config);

export default logger