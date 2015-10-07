'use strict';

/**
 * @ngdoc overview
 * @name yumitzApp
 * @description
 * # yumitzApp
 *
 * Main module of the application.
 */
angular
  .module('yumitzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('myApp')
      .setStorageType('localStorage')
      .setNotify(true, true)
  })
  .run(function($rootScope, localStorageService, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if (next.$$route.originalPath !== '/') {
        if (!localStorageService.get("loggedIn")) {
          $location.path('/');
          event.preventDefault();
        }
      } else {
        if (localStorageService.get("loggedIn")) {
          $location.path('/main');
          event.preventDefault();
        }
      }
    })
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
