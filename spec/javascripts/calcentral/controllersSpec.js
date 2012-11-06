describe('CalCentral controllers', function() {

  describe("Dashboard controller", function() {

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller(DashboardController, {
        $scope: scope
      });
    }));

    it("should be able to find the dashboard controller", function() {

      expect(scope.mine).toBeUndefined();

    });

  });

});
