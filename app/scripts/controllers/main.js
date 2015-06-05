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
    $scope.checkPositionOfSortItem = function($item, element) {
      var $droppedItem = $item;
      // alert($droppedItem.index());
    //   $('.modal').modal();
    //   element.sortable('cancel');
    };

    $scope.isAddedItenary = function(attraction) {
        return !attraction.addedInItinerary;
    };

  }]).directive('draggable', function() {
    return {
      // A = ravityattribute, E = Element, C = Class and M = HTML Comment
      restrict: 'A',
      //The link function is responsible for registering DOM listeners as well as updating the DOM.
      link: function(scope, element, attrs) {
        element.draggable({
          connectToSortable: '[sortable]',
          revert: true,
          helper: 'clone',
          appendTo: 'body',
          start: function(ui, element) {
            scope.draggedElement = $(this).data('attraction');
            // debugger;
          }
        });
      }
    };
  }).directive('sortable', function() {
    return {
      // A = attribute, E = Element, C = Class and M = HTML Comment
      restrict: 'A',
      //The link function is responsible for registering DOM listeners as well as updating the DOM.
      link: function(scope, element, attrs) {
        element.sortable({
          revert: true,
          connectWith: '[sortable]',
          forcePlaceholderSize: true,
          beforeStop: function(e, ui, scope) {
            // console.log(JSON.parse(ui.item.context.dataset.attraction));
            var a = JSON.parse(ui.item.context.dataset.attraction);
            var b = JSON.parse(this.parentElement.dataset.stage);
            b.attraction.push(a);
            debugger;
          },
        });
        $('ul, li').disableSelection();
      }
    };
  });
