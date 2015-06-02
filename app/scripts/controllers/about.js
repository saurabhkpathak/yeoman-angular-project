'use strict';

/**
 * @ngdoc function
 * @name html5Application1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the html5Application1App
 */
angular.module('yeomanProject')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
