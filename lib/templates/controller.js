const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const parameters = require('../params');
const {hbsPath} = require('../_constants')
const fs = require("fs");
const path = require("path");

const controller = fs.readFileSync(path.join(hbsPath, 'controller.js.hbs'), 'utf-8');

module.exports = (() => {
	try {
		Logger.info(`Started creating controller`);
		return Mustache.render(controller, {
			"ModuleName": Case.pascal(parameters.module),
			"module-name": Case.kebab(parameters.module),
			"controller": Case.pascal(parameters.component)
		})
		Logger.info(`Successfully created controller`);
	} catch(e) {
		Logger.error("An error occurred while creating controller");
		Logger.debug("More info", e);
	}
})();