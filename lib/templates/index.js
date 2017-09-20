const Logger = require('../logger');

module.exports = function(parameters) {
	Logger.info(`Started scaffolding module ${parameters.module}`);
	Logger.debug("Parameters", parameters);

	const controller = require('./controller.js')(parameters);
	const controllerSpecs = require('./controller.specs.js')(parameters);
	const component = require('./component.js')(parameters);
	const template = require('./template.js')(parameters);

	return {
		controller,
		controllerSpecs,
		component,
		template
	}
}