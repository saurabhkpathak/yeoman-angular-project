'use strict';

/**
 * @ngdoc function
 * @name yumitzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yumitzApp
 */
angular.module('yumitzApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
      // if (!$rootScope.isAuthorised) {
      //     $location.path('/');
      // }
      function Card() {
        this.orderNum = null;
        this.quantity = 0;
        this.locality = null;
      }
      $scope.cards = [];
      $scope.createNewCard = function() {
        debugger;
        if (isPreviousCardNull($scope.cards)) {
          $scope.cards.push(new Card());
        } else {
          console.warn('previous is empty');
        }
      };
      function isPreviousCardNull(list) {
        if (list.length === 0) {
          return true;
        } else if (list[list.length - 1] === Card) {
          return false;
        }
        return true;
      }
  });
