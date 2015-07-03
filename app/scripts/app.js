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
    'ui.sortable'
]).controller('mainController', function($scope, $location, $route) {
    $scope.$on('$routeChangeSuccess', function(newVal, oldVal) {
        if (oldVal !== newVal) {
            $scope.routeClassName = $route.current.className;
        }
    });

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
