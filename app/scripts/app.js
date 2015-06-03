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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
