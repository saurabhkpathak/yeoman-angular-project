'use strict';

/**
 * @ngdoc function
 * @name html5Application1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the html5Application1App
 */
angular.module('yeomanProject')
  .controller('MainCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    // Load the itinerary list
    $http.get('http://localhost:9000/scripts/itinerary.json').success(function(data) {
      $scope.stagesItenary = data.itinerary;
      console.log($scope.stagesItenary);
    });

    // Load the attractions list
    $http.get('http://localhost:9000/scripts/attractions.json').success(function(data) {
      $scope.attractions = data.attraction;
    });

    $scope.draggableOptions = {
      connectWith: ".connected-drop-target-sortable",
      stop: function(e, ui) {

        // if the element is removed from the first container
        if (ui.item.sortable.source.hasClass('draggable-element-container') &&
          ui.item.sortable.droptarget &&
          ui.item.sortable.droptarget != ui.item.sortable.source &&
          ui.item.sortable.droptarget.hasClass('connected-drop-target-sortable')) {
          // restore the removed item
          debugger
          ui.item.sortable.sourceModel.push(ui.item.sortable.model);
        }
      }
    };

    $scope.sortableOptions = {};


  }]);
