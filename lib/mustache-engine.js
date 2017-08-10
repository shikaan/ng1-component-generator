const Mustache = require('mustache');
const fs = require('fs');

const file = fs.readFileSync('./lib/templates/controller.js.hbs', 'utf-8');

console.log(Mustache.render(file, {
    ModuleName: "ModuleName",
    "module-name": "module-name",
    "controller": "Test"
}));