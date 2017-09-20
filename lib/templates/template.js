const Case = require('case');
const Logger = require('../logger');
const Mustache = require('mustache');
const {hbsPath} = require("../_constants");
const fs = require("fs");
const path = require("path");

module.exports = function(parameters) {
	const template = fs.readFileSync(path.join(hbsPath, 'template.html.hbs'), 'utf-8');

	return (() => {
		try {
			Logger.info(`Started creating template`)
			const results = Mustache.render(template, {
				component: Case.capital(parameters.component)
			})
			Logger.info(`Successfully created component`);
			return results;
		} catch(e) {
			Logger.error("An error occurred while creating template");
			Logger.debug("More info", e);
		}
	})();
}