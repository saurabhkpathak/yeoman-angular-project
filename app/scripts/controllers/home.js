'use strict';

/**
 * @ngdoc function
 * @name yeomanProject.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yeomanProject
 */
angular.module('yeomanProject')
  .controller('HomeCtrl',[
    '$scope',
    function ($scope) {
      $scope.name = 'Saurabh';
    }
  ]);
