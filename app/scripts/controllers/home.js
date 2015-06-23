'use strict';

/**
 * @ngdoc function
 * @name yeomanProject.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yeomanProject
 */
angular.module('yeomanProject')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
