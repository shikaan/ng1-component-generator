const Mustache = require('mustache');
const fs = require('fs');
const parameters = require('./params-parser');
const Case = require('case');
const Logger = require('./logger');

const controller = fs.readFileSync('./lib/templates/controller.js.hbs', 'utf-8');
const controllerSpecs = fs.readFileSync('./lib/templates/controller.specs.js.hbs', 'utf-8');
const component = fs.readFileSync('./lib/templates/component.js.hbs', 'utf-8');
const template = fs.readFileSync('./lib/templates/template.html.hbs', 'utf-8');

Logger.info(`Started scaffolding module ${parameters.module}`);
Logger.debug("Parameters", parameters);

const parsedController = (() => {
	try {
		Logger.info(`Started creating controller`);
		return Mustache.render(controller, {
			ModuleName: Case.pascal(parameters.module),
			"module-name": Case.kebab(parameters.module),
			controller: Case.pascal(parameters.component)
		})
		Logger.info(`Successfully created controller`);
	} catch(e) {
		Logger.error("An error occurred while creating controller");
		Logger.debug("More info", e);
	}
})();

const parsedControllerSpecs = (() => {
	if(parameters.test){
		try {
			Logger.info(`Started creating controller specs`);
			return Mustache.render(controllerSpecs, {
				ModuleName: Case.pascal(parameters.module),
				"module-name": Case.kebab(parameters.module),
				controller: Case.pascal(parameters.component)
			})
			Logger.info(`Successfully created controller specs`);
		}
		catch(e){
			Logger.error("An error occurred while creating controller specs");
			Logger.debug("More info", e);
		}
	}
})();

const parsedComponent = (() => {
	try {
		Logger.info(`Started creating component`);
		return Mustache.render(component, {
			ModuleName: Case.pascal(parameters.module),
			moduleName: Case.camel(parameters.module),
			"module-name": Case.kebab(parameters.module),
			controller: Case.pascal(parameters.component),
			component: Case.kebab(parameters.component),
			"path": parameters.path,
			Component: Case.pascal(parameters.component)
		})
		Logger.info(`Successfully created component`);
	} catch(e) {
		Logger.error("An error occurred while creating component");
		Logger.debug("More info", e);
	}
})();

const parsedTemplate = (() => {
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

module.exports = {
	controller : parsedController,
	controllerSpecs : parsedControllerSpecs,
	component : parsedComponent,
	template: parsedTemplate
}