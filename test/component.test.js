const mocha = require("mocha");
const assert = require("assert");
const proxyquire = require("proxyquire").noPreserveCache();
const Case = require("case");
const TemplateParser = require('./fixtures/template-parser');

let component = proxyquire('../lib/templates/component', {
	'../_constants': {hbsPath: null}
})

describe("Templates: Component", function () {
	it("should throw if template is missing", function () {
		assert.throws(function () {
			controller({})
		});
	})

	describe("AngularJS style guide", function () {
		before(() => {
			//Restoring
			component = require('../lib/templates/component');
			template = component({
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

		it("should have a kebab-case module name", () => {
			const moduleName = TemplateParser.getModuleName(template);
			assert.ok(moduleName === "app-test");
		})

		it("should have a name avoiding collisions", () => {
			const componentName = TemplateParser.getComponentName(template);
			assert.ok(componentName === "appTestHeader")
		})

		it("should have the right controller name", () => {
			const controllerName = TemplateParser.getComponentControllerName(template);
			assert.ok(controllerName === "AppTestHeaderController")
		})

		it("should be using controller as $ctrl syntax", () => {
			assert.ok(template.indexOf("controllerAs: \"$ctrl\"") > -1);
			assert.ok(template.indexOf("bindToController: true") > -1);
		})
	})

	describe("Parameters error handling", function () {
		before(() => {
			//Restoring
			controller = require('../lib/templates/component');
		})

		it("should throw in case of missing module", () => {
			assert.throws(() => {
				component({
					path: './example/app',
				    test: true,
				    component: "header"
				})
			})
		})

		it("should throw in case of missing component", () => {
			assert.throws(() => {
				component({
					path: './example/app',
				    test: true,
				    module: "appTest"
				})
			})
		})

		it("should throw in case of missing path", () => {
			assert.throws(() => {
				component({
				    test: true,
				    module: "appTest",
				    component: "header"
				})
			})
		})
	})
})