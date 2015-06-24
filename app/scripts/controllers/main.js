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
    // var newDay = {
    //
    // }

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
        addAttraction(e, ui);
      }
    };

    $scope.sortableOptions = {
      connectWith: ".connected-drop-target-sortable",
      update: function(e, ui) {
        // In case the change occures in the same container
        if (this === ui.item.parent()[0] && $(this).attr('data-stage-label') !== ui.item.sortable.droptarget.attr('data-stage-label')) {
          addAttraction(e, ui);
        }
      }
    };
    $scope.addDay = function() {
        var lastday = $scope.stagesItenary.stages[$scope.stagesItenary.stages.length - 1];
        // var dateLast = lastday.date.split('-');
        var newDay = {
            stg_label: parseInt(lastday.stg_label) + 1,
            country: lastday.country,
            city: lastday.city,
            heading: lastday.heading,
            date: lastday.date,
            attraction: []
        }
        $scope.stagesItenary.stages.push(newDay);
    };

    $scope.fixTimeSlot = function(attractionList, baseTime) {
      baseTime = baseTime ? baseTime : '9:00';
      var durationTime, currTime, temp = baseTime;
      var hrs, mins;
      angular.forEach(attractionList, function(attraction) {
        attraction.time = temp;
        durationTime = attraction.duration.split(':');
        currTime = temp.split(':');
        if (parseInt(durationTime[1]) + parseInt(currTime[1]) !== 60) {
          hrs = parseInt(durationTime[0]) + parseInt(currTime[0]);
          mins = parseInt(durationTime[1]) + parseInt(currTime[1]);
          temp = mins ? (hrs + ':' + mins) : (hrs + ':00');
        } else {
          temp = parseInt(durationTime[0]) + parseInt(currTime[0]) + 1 + ':00';
        }
      });
      return attractionList;
    };

    function sumOfDuration(list) {
      var sum = 0;
      angular.forEach(list, function(item) {
        sum += parseInt(item.duration);
      });
      return sum;
    }

    function addAttraction(e, ui) {
      var targetList = ui.item.sortable.droptargetModel;
      var totalDuration = sumOfDuration(targetList);
      if (ui.item.sortable.model === undefined ||
        (totalDuration + parseInt(ui.item.sortable.model.duration)) > 11) {
        ui.item.sortable.cancel();
        alert('Cannot add attraction as duration is exceeding 11 hours');
      }
    }

  }]);
