(function() {
  /*global angular, ProfileController, SplashController*/
  'use strict';

  /* App Module */

  angular.module('calcentral', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true).hashPrefix('!');
      $routeProvider.when('/', {
        templateUrl: 'partials/splash.html',
        controller: SplashController
      }).
      when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: ProfileController
      }).
      otherwise({
        redirectTo: '404.html'
      });
    }]
  );

})();
