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
        $scope.cards = localStorageService.get('cards') ? localStorageService.get('cards') : [];
        if ($scope.cards.length && !$scope.cards[$scope.cards.length - 1].orderNum) {
            $scope.cards.splice($scope.cards.length - 1, 1);
        }
        $scope.clearLocalStorage = function() {
            localStorageService.remove('loggedIn');
        };
        $scope.saveCard = function() {
            localStorageService.set('cards', $scope.cards);
        };
        $scope.removeCard = function(index) {
            $scope.cards.splice(index, 1);
        };
        $scope.editCard =function(index) {
            $scope.editAtIndex = index;
        };
        $scope.$watchCollection('cards', function(n) {
            if (n.length) {
                $scope.saveCard();
            }
        });
    });
