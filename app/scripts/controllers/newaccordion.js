'use strict';

/**
* @ngdoc function
* @name yeomanProject.controller:AccordiontestCtrl
* @description
* # AccordiontestCtrl
* Controller of the yeomanProject
*/
angular.module('yeomanProject')
.controller('NewaccordionCtrl', ['$scope', function (scope) {

  // $scope.oneAtATime = true;
  //
  // $scope.groups = [
  // {
  //   title: 'Dynamic Group Header - 1',
  //   content: 'Dynamic Group Body - 1'
  // },
  // {
  //   title: 'Dynamic Group Header - 2',
  //   content: 'Dynamic Group Body - 2'
  // }
  // ];
  //
  // $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  //
  // $scope.addItem = function() {
  //   var newItemNo = $scope.items.length + 1;
  //   $scope.items.push('Item ' + newItemNo);
  // };
  //
  // $scope.status = {
  //   isFirstOpen: true,
  //   isFirstDisabled: false
  // };

  scope.items = [
  {
    name: "item1",
    desc: "Item 1",
    subitems: [
    {
      name: "subitem1",
      desc: "Sub-Item 1"
    },
    {
      name: "subitem2",
      desc: "Sub-Item 2"
    },
    {
      name: "subitem2",
      desc: "Sub-Item 2"
    }]
  },
  {
    name: "item2",
    desc: "Item 2",
    subitems: [
    {
      name: "subitem1",
      desc: "Sub-Item 1"
    },
    {
      name: "subitem2",
      desc: "Sub-Item 2"
    },
    {
      name: "subitem2",
      desc: "Sub-Item 2"
    }]
  },
  {
    name: "item3",
    desc: "Item 3",
    subitems: [
    {
      name: "subitem1",
      desc: "Sub-Item 1"
    },
    {
      name: "subitem2",
      desc: "Sub-Item 2"
    },
    {
      name: "subitem2",
      desc: "Sub-Item 2"
    }]
  }
  ];

  scope.default = scope.items[2];

  scope.$parent.isopen = (scope.$parent.default === scope.item);

  scope.$watch('isopen', function (newvalue, oldvalue, scope) {
    scope.$parent.isopen = newvalue;
  });

}]);
