'use strict';

/**
 * @ngdoc function
 * @name yumitzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yumitzApp
 */
angular.module('yumitzApp')
  .controller('MainCtrl', function ($rootScope, $location) {
      if (!$rootScope.isAuthorised) {
          $location.path('/');
      }
  });
