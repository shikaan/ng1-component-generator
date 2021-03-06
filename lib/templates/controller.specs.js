const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const {hbsPath} = require("../_constants");
const fs = require("fs");
const path = require("path");

module.exports = function (parameters) {
	const controllerSpecs = fs.readFileSync(path.join(hbsPath, 'controller.specs.js.hbs'), 'utf-8');

	if(parameters.test){
		try {
			Logger.info(`Started creating controller specs`);
			const results = Mustache.render(controllerSpecs, {
				"ModuleName": Case.pascal(parameters.module),
				"module-name": Case.kebab(parameters.module),
				"controller": Case.pascal(parameters.component)
			})
			Logger.info(`Successfully created controller specs`);
			return results;
		}
		catch(e){
			Logger.error("An error occurred while creating controller specs");
			Logger.debug("More info", e);

			throw new Error();
		}
	}
}