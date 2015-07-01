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
  ])
  .config(function ($routeProvider) {
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
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
