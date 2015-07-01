'use strict';

/**
 * @ngdoc function
 * @name html5Application1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the html5Application1App
 */
angular.module('yeomanProject')
  .controller('HomeCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    // Load the itinerary list
    $http.get('http://localhost:9000/scripts/sliderData.json').success(function(data) {
      $scope.carouselData = data;
      console.log($scope.carouselData);
    });
  }]);
