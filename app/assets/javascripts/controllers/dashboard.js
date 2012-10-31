/**
 * The dashboard controller for the calcentral app.
 */

(function() {

  /*global calcentral, define, window*/
  'use strict';

  define(['calcentral'], function (app) {
    // The reason we need to use these square brackets is for minification purposes
    return calcentral.controller('DashboardController', ['$scope', '$location', 'dashboardStorage', 'filterFilter',
      function DashboardController($scope, $location, dashboardStorage, filterFilter) {
        $scope.hellowordl = function() {
          window.alert('done');
        };
      }
    ]);
  });

})();
