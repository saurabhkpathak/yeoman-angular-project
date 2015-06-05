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
    //   debugger
    //   $('.dragable').draggable();
    //   $(function() {
    //     $( ".dragable" ).draggable();
    //     $( ".droppable" ).droppable({
    //       drop: function( event, ui ) {
    //         $( this )
    //           .addClass( "ui-state-highlight" )
    //           .find( "p" )
    //             .html( "Dropped!" );
    //       }
    //     });
    //   });
    // $( ".dragable" ).draggable({
    //     start: function( event, ui ) {
    //         alert("asdasd");
    //     }
    // });
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
            console.log(JSON.parse(ui.item.context.dataset.attraction));
            debugger;
          },
        });
        $('ul, li').disableSelection();
      }
    };
  });

// .directive('droppable', function($compile) {
//   return {
//     restrict: 'A',
//     link: function($scope, element,attrs){
//       //This makes an element Droppable
//       element.droppable({
//         accept: 'li',
//         drop:function(event, ui) {
//         //   var dragIndex = angular.element(ui.draggable).data('index'),
//         //       reject = angular.element(ui.draggable).data('reject'),
//         //       dragEl = angular.element(ui.draggable).parent(),
//         //       dropEl = angular.element(this);
//           //
//         //   if (dragEl.hasClass('list1') && !dropEl.hasClass('list1') && reject !== true) {
//         //     $scope.list2.push($scope.list1[dragIndex]);
//         //     $scope.list1.splice(dragIndex, 1);
//         //   } else if (dragEl.hasClass('list2') && !dropEl.hasClass('list2') && reject !== true) {
//         //     $scope.list1.push($scope.list2[dragIndex]);
//         //     $scope.list2.splice(dragIndex, 1);
//         //   }
//         //   $scope.$apply();
//         console.log('dragged ' + ui.draggable.attr('class') + ' onto ' + this.id);
//         }
//       });
//     }
//   };
// })
