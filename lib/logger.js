class Logger {
	error(...args){
		console.log(`[ERROR]`, ...args);
	}

	warn(...args){
		console.log(`[WARN]`, ...args);
	}

	info(...args){
		console.log(`[INFO]`, ...args);
	}

	debug(...args){
		console.log(`[DEBUG]`, ...args);
	}
}

module.exports = new Logger();