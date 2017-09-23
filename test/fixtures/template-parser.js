const isInIIFE = (template) => {
	const startIndex = template.indexOf("(function(angular) {");
	const endIndex = template.indexOf("})(angular);");

	return startIndex > -1 && endIndex > -1 && startIndex < endIndex;
};

const isUsingStrict = (template) => {
	return template.indexOf("\"use strict\";") > -1;
}

const isUsingNgInject = (template) => {
	return template.indexOf("/*@ngInject*/") > -1;	
}

const getModuleName = (template) => {
	return template.split("angular.module(\"")[1].split("\"")[0];
}

const getControllerName = (template) => {
	return template.split(".controller(\"")[1].split("\"")[0];	
}

const getComponentName = (template) => {
	return template.split(".directive(\"")[1].split("\"")[0];	
}

const getComponentControllerName = (template) => {
	return template.split("controller: \"")[1].split("\"")[0];	
}

module.exports = {
	isInIIFE,
	isUsingStrict,
	isUsingNgInject,
	getModuleName,
	getControllerName,
	getComponentName,
	getComponentControllerName
}