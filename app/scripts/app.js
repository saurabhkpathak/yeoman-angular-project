'use strict';

/**
 * @ngdoc overview
 * @name html5Application1App
 * @description
 * # html5Application1App
 *
 * Main module of the application.
 */
angular
  .module('yeomanProject', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker'
]).controller('mainController', function($scope, $location, $route) {
    $scope.$on('$routeChangeSuccess', function(newVal, oldVal) {
        if (oldVal !== newVal) {
            $scope.routeClassName = $route.current.className;
        }
    });




    $scope.dates = {
      date1: new Date()
    };

    $scope.open = {
      date1: false
    };

    // Disable weekend selection
    // $scope.disabled = function(date, mode) {
    //   return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
    // };

    // $scope.dateOptions = {
    //   showWeeks: false,
    //   startingDay: 1
    // };

    $scope.openCalendar = function(e, date) {
      e.preventDefault();
      e.stopPropagation();

      $scope.open[date] = true;
    };

    // watch date4 and date5 to calculate difference
    // $scope.$watch(function() {
    //   return $scope.dates;
    // }, function() {
    //   if ($scope.dates.date4 && $scope.dates.date5) {
    //     var diff = $scope.dates.date4.getTime() - $scope.dates.date5.getTime();
    //     $scope.dayRange = Math.round(Math.abs(diff/(1000*60*60*24)))
    //   } else {
    //     $scope.dayRange = 'n/a';
    //   }
    // }, true);

}).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/slider', {
        templateUrl: 'views/slider.html',
        controller: 'SliderCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        className: 'home'
      })
      .when('/searchResult', {
        templateUrl: 'views/searchResult.html',
        controller: 'HomeCtrl',
        className: 'searchResult'
      })
      .when('/itinerary', {
        templateUrl: 'views/itinerary.html',
        controller: 'HomeCtrl',
        className: 'itinerary'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
