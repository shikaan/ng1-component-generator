const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const parameters = require('../params');
const {hbsPath} = require('../_constants')
const path = require('path');
const fs = require("fs");

const component = fs.readFileSync(path.join(hbsPath, 'component.js.hbs'), 'utf-8');

module.exports = (() => {
	try {
		Logger.info(`Started creating component`);
		return Mustache.render(component, {
			"ModuleName": Case.pascal(parameters.module),
			"moduleName": Case.camel(parameters.module),
			"module-name": Case.kebab(parameters.module),
			"controller": Case.pascal(parameters.component),
			"component": Case.kebab(parameters.component),
			"path": parameters.path,
			"Component": Case.pascal(parameters.component)
		})
		Logger.info(`Successfully created component`);
	} catch(e) {
		Logger.error("An error occurred while creating component");
		Logger.debug("More info", e);
	}
})();