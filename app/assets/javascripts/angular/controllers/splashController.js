function SplashCtrl($scope, $http) {

  'use strict';

  $http.get('dummy/user.json').success(function(data) {
    $scope.user = data;
  });
}

//SplashCtrl.$inject = ['$scope', '$http'];