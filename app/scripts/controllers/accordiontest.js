'use strict';

/**
 * @ngdoc function
 * @name yeomanProject.controller:AccordiontestCtrl
 * @description
 * # AccordiontestCtrl
 * Controller of the yeomanProject
 */
angular.module('yeomanProject')
  .controller('AccordiontestCtrl', ['$scope', function ($scope) {

    $scope.oneAtATime = true;

    $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };


  }]);
