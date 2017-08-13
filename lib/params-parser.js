let program = require('commander');
const version = require('../package.json').version;
const path = require('path');
const log = require('./logger');

function parsePath(input, defaultValue) {
    try {
        return path.normalize(input);
    }
    catch (e) {
        log.error(e);
        return path.normalize(defaultValue);
    }
}

program
    .version(version)
    .option('-p, --path [value]', 'Destination path [./src/app]', parsePath, './src/app')
    .option('-t, --tests', 'Add specs file?')
    .option('-m, --module [value]', 'Angular module name [app]', 'app')
    .arguments('<component>')
    .action((component) => {
        program.component = component;
    })
    .parse(process.argv);

module.exports = {
    path: program.path,
    test: !!program.tests,
    module: program.module,
    component: program.component
};