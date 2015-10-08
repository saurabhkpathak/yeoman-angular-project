'use strict';

/**
 * @ngdoc function
 * @name yumitzApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the yumitzApp
 */
angular.module('yumitzApp')
    .controller('LoginCtrl', function($scope, $rootScope, $location, authUsername, authPassword, localStorageService) {
        $scope.isValidUser = function() {
            if ($scope.userName && $scope.passWord) {
                localStorageService.set('loggedIn', true);
                $location.path('/main');
            } else {
                console.warn('username and password cannot be blank');
            }
        };
    });
