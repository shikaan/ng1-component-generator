#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const parameters = require('./params');
const templates = require('./templates')(parameters);

const extendedPath = path.join(path.resolve(parameters.path), parameters.component);

mkdirp.sync(extendedPath)

const controllerPath = path.join(extendedPath, `${parameters.component}.controller.js`);
fs.writeFileSync(controllerPath, templates.controller);

const componentPath = path.join(extendedPath, `${parameters.component}.component.js`);
fs.writeFileSync(componentPath, templates.component);

const templatePath = path.join(extendedPath, `${parameters.component}.template.html`);
fs.writeFileSync(templatePath, templates.template);

if(parameters.test){
	const controllerSpecsPath = path.join(extendedPath, `${parameters.component}.controller.specs.js`);
	fs.writeFileSync(controllerSpecsPath, templates.controllerSpecs);
}