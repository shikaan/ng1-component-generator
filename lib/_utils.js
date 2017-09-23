const isNullOrEmptyString = function (string) {
	return !string || String(string) === ""; 
}

const isNullOrEmptyObject = function (object) {
	return !object || (String(object) === "[object Object]" && Object.keys(object).length === 0);
}

module.exports = {
	isNullOrEmptyString,
	isNullOrEmptyObject
}