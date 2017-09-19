const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const parameters = require('../params');
const {hbsPath} = require("../_constants");
const fs = require("fs");
const path = require("path");

const template = fs.readFileSync(path.join(hbsPath, 'template.html.hbs'), 'utf-8');

module.exports = (() => {
	try {
		Logger.info(`Started creating template`)
		return Mustache.render(template, {
			component: Case.capital(parameters.component)
		})
		Logger.info(`Successfully created component`);
	} catch(e) {
		Logger.error("An error occurred while creating template");
		Logger.debug("More info", e);
	}
})();