#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const params = require('./params-parser');
const templates = require('./mustache-engine');

const extendedPath = path.join(path.resolve(params.path), params.component);

mkdirp.sync(extendedPath)

const controllerPath = path.join(extendedPath, `${params.component}.controller.js`);
const componentPath = path.join(extendedPath, `${params.component}.component.js`);
const templatePath = path.join(extendedPath, `${params.component}.template.html`);

fs.writeFileSync(controllerPath, templates.controller);
fs.writeFileSync(componentPath, templates.component);
fs.writeFileSync(templatePath, templates.template);
