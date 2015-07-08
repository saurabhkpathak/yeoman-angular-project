'use strict';

/**
* @ngdoc function
* @name yeomanProject.controller:ItineraryCtrl
* @description
* # ItineraryCtrl
* Controller of the yeomanProject
*/
angular.module('yeomanProject')
.controller('ItineraryCtrl', ['$scope', function ($scope) {

  $scope.$parent.isopen = ($scope.$parent.default === $scope.item);

  $scope.$watch('isopen', function (newvalue, oldvalue, $scope) {
    $scope.$parent.isopen = newvalue;
  });

}]);
