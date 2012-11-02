(function() {
  /*global angular, SplashCtrl*/
  'use strict';

  /* App Module */

  angular.module('calcentral', []).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'partials/splash.html',
          controller: SplashCtrl
        }).
        otherwise({
          redirectTo: '404.html'
        });
  }]);

})();
