const mocha = require("mocha");
const assert = require("assert");
const proxyquire = require("proxyquire").noPreserveCache();
const Case = require("case");
const TemplateParser = require('./fixtures/template-parser');

let controller = proxyquire('../lib/templates/controller', {
	'../_constants': {hbsPath: null}
})

describe("Templates: Controller", function () {
	it("should throw if template is missing", function () {
		assert.throws(function () {
			controller({})
		});
	})

	describe("AngularJS style guide", function () {
		before(() => {
			//Restoring
			controller = require('../lib/templates/controller');
			template = controller({
				path: './example/app',
			    test: true,
			    module: "appTest",
			    component: "header"
			})
		})

		it("should be in an IIFE", () => {
			assert.ok(TemplateParser.isInIIFE(template));
		})

		it("should be in strict mode", () => {
			assert.ok(TemplateParser.isUsingStrict(template));
		})

		it("should add ngInject annotation", () => {
			assert.ok(TemplateParser.isUsingNgInject(template));	
		})

		it("should use controller as $ctrl syntax", () => {
			const isUsingControllerAsSyntax = template.indexOf("let $ctrl = this;") > -1;
			assert.ok(isUsingControllerAsSyntax);
		})	

		it("should have a kebab-case module name", () => {
			const moduleName = TemplateParser.getModuleName(template);
			assert.ok(moduleName === "app-test");
		})

		it("should have a name avoiding collisions", () => {
			const controllerName = TemplateParser.getControllerName(template);
			assert.ok(controllerName === "AppTestHeaderController")
		})
	})

	describe("Parameters error handling", function () {
		before(() => {
			//Restoring
			controller = require('../lib/templates/controller');
		})

		it("should throw in case of missing module", () => {
			assert.throws(() => {
				controller({
					path: './example/app',
				    test: true,
				    component: "header"
				})
			})
		})

		it("should throw in case of missing component", () => {
			assert.throws(() => {
				controller({
					path: './example/app',
				    test: true,
				    module: "appTest"
				})
			})
		})
	})
})