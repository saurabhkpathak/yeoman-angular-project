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
      date1: {},
      date2: {}
    };

    $scope.open = {
      date1: false,
      date2: false
    };

    $scope.openCalendar = function(e, date) {
      e.preventDefault();
      e.stopPropagation();

      $scope.open[date] = true;
    };

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
        controller: 'ItineraryCtrl',
        className: 'itinerary'
      })
      .when('/AccordionTest', {
        templateUrl: 'views/accordiontest.html',
        controller: 'AccordiontestCtrl',
        controllerAs: 'AccordionTest'
      })
      .when('/newAccordion', {
        templateUrl: 'views/newaccordion.html',
        controller: 'NewaccordionCtrl',
        controllerAs: 'newAccordion'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
