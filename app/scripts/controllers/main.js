'use strict';

/**
 * @ngdoc function
 * @name html5Application1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the html5Application1App
 */
angular.module('yeomanProject')
  .controller('MainCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
      $http.get('http://localhost:9000/scripts/vacationPackages.json').success(function(data) {
        //   alert("hiii");
          $scope.dayDetails = data.data;
      });
  }]);
