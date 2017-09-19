const log = require('npmlog');

const LEVEL = {
	ERROR: "error",
	WARN: "warn",
	INFO: "info",
	DEBUG: "verbose"
}

log.level = process.env.NODE_ENV === "test" ? LEVEL.DEBUG : LEVEL.ERROR;

class Logger {
	static error(...args){
		log.error(`[ERROR]`, ...args);
	}

	static warn(...args){
		log.warn(`[WARN]`, ...args);
	}

	static info(...args){
		log.info(`[INFO]`, ...args);
	}

	static debug(...args){
		log.verbose(`[DEBUG]`, ...args);
	}
}

module.exports = Logger;