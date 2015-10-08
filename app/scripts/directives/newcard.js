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
                cards: '=',
                editAtIndex: '='
            },
            controller: 'newCardCtrl',
            templateUrl: 'views/newcard.html',
            link: function(scope) {
                $document.on('click', function(event) {
                    var elementClicked = angular.element(event.target);
                    if (elementClicked.hasClass('edit-btn')) {
                        scope.$apply(function() {
                            scope.fullMode = true;
                        });
                    } else if (elementClicked.parents('new-card').length === 0) {
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
            if ($scope.editAtIndex) {
                $scope.cards[$scope.editAtIndex] = $scope.card;
                $scope.editAtIndex = null;
            } else {
                $scope.cards.push($scope.card);
            }
            $scope.card = new Card();
            $scope.fullMode = false;
        };
        $scope.$watch('editAtIndex', function(n) {
            if (n === null || n === undefined) {
                return;
            }
            $scope.fullMode = true;
            $scope.card = $scope.cards[n];
        });
    });
