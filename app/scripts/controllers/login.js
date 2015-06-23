'use strict';

/**
 * @ngdoc function
 * @name yumitzApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yumitzApp
 */
angular.module('yumitzApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, authUsername, authPassword) {
      $scope.isValidUser = function() {
          if ($scope.userName && $scope.passWord) {
              if ($scope.userName === authUsername && $scope.passWord === authPassword) {
                  $rootScope.isAuthorised = true;
                  $location.path('/main');
              } else {
                  console.warn('wrong username and password');
              }
          } else {
              console.warn('username and password cannot be blank');
          }
      };
  });
