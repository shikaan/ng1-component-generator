const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const {hbsPath} = require('../_constants')
const {isNullOrEmptyString, isNullOrEmptyObject} = require("../_utils");
const fs = require("fs");
const path = require("path");

module.exports = function (parameters) {
	const controller = fs.readFileSync(path.join(hbsPath, 'controller.js.hbs'), 'utf-8');

	if(isNullOrEmptyObject(parameters)){
		const MESSAGE = "Missing parameters in controller"; 
		Logger.error(MESSAGE);
		throw new Error(MESSAGE);
	}

	if(isNullOrEmptyString(parameters.module)){
		const MESSAGE = "Missing MODULE parameter in controller"; 
		Logger.error(MESSAGE);
		throw new Error(MESSAGE);
	}

	if(isNullOrEmptyString(parameters.component)){
		const MESSAGE = "Missing COMPONENT parameter in controller"; 
		Logger.error(MESSAGE);
		throw new Error(MESSAGE);
	}

	try {
		
		Logger.info(`Started creating controller`);
		const results = Mustache.render(controller, {
			"ModuleName": Case.pascal(parameters.module),
			"module-name": Case.kebab(parameters.module),
			"controller": Case.pascal(parameters.component)
		})
		Logger.info(`Successfully created controller`);
		Logger.debug("Controller", results);
		
		return results;
	
	} catch(e) {
		Logger.error("An error occurred while creating controller");
		Logger.debug("More info", e);

		throw new Error();
	}
}