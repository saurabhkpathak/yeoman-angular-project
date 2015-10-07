'use strict';

/**
 * @ngdoc function
 * @name yumitzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yumitzApp
 */
angular.module('yumitzApp')
  .controller('MainCtrl', function($scope, localStorageService) {
    function Card() {
      this.orderNum = null;
      this.quantity = 0;
      this.locality = null;
    }
    $scope.cards = localStorageService.get("cards") ? localStorageService.get("cards") : [];
    if ($scope.cards.length && !$scope.cards[$scope.cards.length - 1]["orderNum"]) {
        $scope.cards.splice($scope.cards.length - 1, 1);
    }
    $scope.createNewCard = function() {
      if (isPreviousCardNull($scope.cards)) {
        $scope.cards.push(new Card());
      } else {
        console.warn('previous is empty');
      }
    };
    $scope.clearLocalStorage = function() {
      localStorageService.remove("loggedIn");
    };
    $scope.saveCard = function() {
        localStorageService.set("cards", $scope.cards);
    };

    function isPreviousCardNull(list) {
      if (list.length === 0) {
        return true;
      } else if (!list[list.length - 1]["orderNum"]) {
        return false;
      }
      return true;
    }
    $scope.$watchCollection('cards', function(n, o) {
      if (n.length) {
          $scope.saveCard();
      }
    })
  });
