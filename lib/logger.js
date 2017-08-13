class Logger {
	error(...args){
		console.log(`[ERROR] - ${args.join(', ')}`)
	}

	warn(...args){
		console.log(`[WARN] - ${args.join(', ')}`)
	}

	info(...args){
		console.log(`[INFO] - ${args.join(', ')}`)
	}

	debug(...args){
		console.log(`[DEBUG] - ${args.join(', ')}`)
	}
}

module.exports = new Logger();