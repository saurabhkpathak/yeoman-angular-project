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
      $scope.draggables = $scope.attractions.map(function(x) {
        return [x];
      });

    });
    $scope.draggableOptions = {
      connectWith: ".connected-drop-target-sortable",
      update: function(e, ui) {
        var targetList = ui.item.sortable.droptargetModel;
        var sourceList = ui.item.sortable.sourceModel;
        if (targetList === sourceList) {
          ui.item.sortable.cancel();
          return;
        } else {
          var totalDuration = sumOfDuration(targetList);
          if ((totalDuration + parseInt(ui.item.sortable.model.duration)) <= 11) {
            targetList.splice(ui.item.sortable.dropindex, 0, ui.item.sortable.model);
          } else {
            ui.item.sortable.cancel();
            alert('Cannot add attraction as duration is exceeding 11 hours');
          }
        }
      }
    };

    $scope.sortableOptions = {
      // connectWith: ".connected-drop-target-sortable"
    };

    $scope.sortableOptions = {};
    function sumOfDuration (list) {
      var sum = 0;
      angular.forEach(list, function(item) {
        sum += parseInt(item.duration);
      });
      return sum;
    }

  }]);
