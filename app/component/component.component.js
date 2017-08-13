(function(angular){
    "use strict";

    /*@ngInject*/
    function AppComponentFactory(){
        const COMPONENT_NAME = "component";
        const MODULE_PATH = "app";

        return {
        	restrict: "E",
        	scope: {},
        	bindToController: true,
        	controllerAs: "$ctrl",
        	controller: "AppComponentController",
        	templateUrl: `${MODULE_PATH}/${COMPONENT_NAME}/${COMPONENT_NAME}.template.html?v=1234567809` 
        }

    }

    angular.module("app")
        .directive("appComponent", AppComponentFactory);
})(angular);