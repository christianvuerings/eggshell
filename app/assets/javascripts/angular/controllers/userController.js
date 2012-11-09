(function(window) {
  /*global calcentral*/
  'use strict';

  /**
   * User controller
   */
  calcentral.controller('UserController', ['$http', '$scope', function($http, $scope) {

    $scope.user = {};

    $http.get('/api/user/status').success(function(data) {
      $scope.user = data;
    });

    $scope.signOut = function() {
      window.location = '/logout';
    };

    $scope.signIn = function() {
      window.location = '/dashboard';
    };

  }]);

})(window);
