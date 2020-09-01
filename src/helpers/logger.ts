import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.simple(),
		format.timestamp(),
		format.colorize({
			all: true,
			colors: {
				'info': 'green',
				'verbose': 'blue',
				'warn': 'yellow',
				'error': 'red'
			}
		}),
	),
	transports: [
		new transports.File({ filename: "../log/error.log", level: 'error'}),
		new transports.Console()
	]
})

export default logger;