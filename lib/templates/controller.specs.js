const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const parameters = require('../params');
const {hbsPath} = require("../_constants");
const fs = require("fs");
const path = require("path");

const controllerSpecs = fs.readFileSync(path.join(hbsPath, 'controller.specs.js.hbs'), 'utf-8');

module.exports = (() => {
	if(parameters.test){
		try {
			Logger.info(`Started creating controller specs`);
			return Mustache.render(controllerSpecs, {
				"ModuleName": Case.pascal(parameters.module),
				"module-name": Case.kebab(parameters.module),
				"controller": Case.pascal(parameters.component)
			})
			Logger.info(`Successfully created controller specs`);
		}
		catch(e){
			Logger.error("An error occurred while creating controller specs");
			Logger.debug("More info", e);
		}
	}
})();