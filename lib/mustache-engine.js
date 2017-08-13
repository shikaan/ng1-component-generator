const Mustache = require('mustache');
const fs = require('fs');
const parameters = require('./params-parser');
const Case = require('case');
const Logger = require('./logger');

const controller = fs.readFileSync('./lib/templates/controller.js.hbs', 'utf-8');
const component = fs.readFileSync('./lib/templates/component.js.hbs', 'utf-8');
const template = fs.readFileSync('./lib/templates/template.html.hbs', 'utf-8');

Logger.info(`Started scaffolding module ${parameters.module}`);
Logger.debug("Parameters", parameters.toString());

Logger.info(`Started creating controller`);
const parsedController = Mustache.render(controller, {
	ModuleName: Case.pascal(parameters.module),
	"module-name": Case.kebab(parameters.module),
	controller: Case.pascal(parameters.component)
})
Logger.info(`Successfully created controller`);

Logger.info(`Started creating component`);
const parsedComponent = Mustache.render(component, {
	ModuleName: Case.pascal(parameters.module),
	moduleName: Case.camel(parameters.module),
	"module-name": Case.kebab(parameters.module),
	controller: Case.pascal(parameters.component),
	component: Case.kebab(parameters.component),
	"path": parameters.path,
	Component: Case.pascal(parameters.component)
})
Logger.info(`Successfully created component`);


Logger.info(`Started creating template`)
const parsedTemplate = Mustache.render(template, {
	component: Case.capital(parameters.component)
})
Logger.info(`Successfully created component`);

module.exports = {
	controller : parsedController,
	component : parsedComponent,
	template: parsedTemplate
}