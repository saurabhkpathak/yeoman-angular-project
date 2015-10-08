'use strict';

/**
 * @ngdoc directive
 * @name yumitzApp.directive:newCard
 * @description
 * # newCard
 */
angular.module('yumitzApp')
    .directive('newCard', function($document) {
        return {
            restrict: 'E',
            scope: {
                cards: '='
            },
            controller: 'newCardCtrl',
            templateUrl: 'views/newcard.html',
            link: function(scope) {
                $document.on('click', function(event) {
                    if (angular.element(event.target).parents('new-card').length === 0) {
                        scope.$apply(function() {
                            scope.fullMode = false;
                        });
                    }
                });
            }
        };
    })
    .controller('newCardCtrl', function($scope) {
        function Card() {
            this.orderNum = null;
            this.quantity = 0;
            this.locality = null;
        }
        $scope.fullMode = false;
        $scope.card = new Card();
        $scope.addToCard = function() {
            $scope.cards.push($scope.card);
            $scope.card = new Card();
            $scope.fullMode = false;
        };
    });
