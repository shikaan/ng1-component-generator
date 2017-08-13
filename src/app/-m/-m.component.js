(function(angular){
    "use strict";

    /*@ngInject*/
    function AppMFactory(){
        const COMPONENT_NAME = "-m";
        const MODULE_PATH = "./src/app";

        return {
        	restrict: "E",
        	scope: {},
        	bindToController: true,
        	controllerAs: "$ctrl",
        	controller: "AppMController",
        	templateUrl: `${MODULE_PATH}/${COMPONENT_NAME}/${COMPONENT_NAME}.template.html?v=1234567809` 
        }

    }

    angular.module("app")
        .directive("appM", AppMFactory);
})(angular);