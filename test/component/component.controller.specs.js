describe("Controller: AppComponentController", function() {
  let scope,
  AppComponentController,
  serviceMock;

  beforeEach(module("app"));

  beforeEach(inject(
    function ($controller, $rootScope) {
      scope = $rootScope.$new();

      AppComponentController = $controller("AppComponentController");

      scope.$apply();
    }
  ));
});