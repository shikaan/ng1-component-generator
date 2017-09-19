const parameters = require('../params');
const Logger = require('../logger');

Logger.info(`Started scaffolding module ${parameters.module}`);
Logger.debug("Parameters", parameters);

const controller = require('./controller.js');
const controllerSpecs = require('./controller.specs.js');
const component = require('./component.js');
const template = require('./template.js');

module.exports = {
	controller,
	controllerSpecs,
	component,
	template
}