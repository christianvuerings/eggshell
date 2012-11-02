/**
 * User controller
 */

/*global */
'use strict';

function UserController($http, $scope) {
  $http.get('dummy/user.json').success(function(data) {
    $scope.user = data;
  });
}

//UserController.$inject = ['$scope', '$http'];
