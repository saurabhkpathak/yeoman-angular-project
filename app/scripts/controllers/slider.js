'use strict';

/**
 * @ngdoc function
 * @name html5Application1App.controller:SliderCtrl
 * @description
 * # SliderCtrl
 * Controller of the html5Application1App
 */
angular.module('yeomanProject')
  .controller('SliderCtrl', function ($scope) {
    $scope.pos = 0;
    $scope.switchImages = function(direction) {
      debugger;
      if (direction === 'left') {
        if ($scope.pos+1 > 3) {
          return;
        }
        $scope.pos++;
      } else if (direction === 'right') {
        if ($scope.pos-1 < 0) {
          return;
        }
        $scope.pos--;
      } else {
        alert('none');
      }
    };
  });
