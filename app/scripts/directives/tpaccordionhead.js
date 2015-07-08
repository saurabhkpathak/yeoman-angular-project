'use strict';

/**
 * @ngdoc directive
 * @name yeomanProject.directive:tpAccordionHead
 * @description
 * # tpAccordionHead
 */
angular.module('yeomanProject')
  .directive('tpAccordionHead', function () {
    return {
      transclude: true,
      templateUrl: '../../views/accordionhead.html',
      controller: 'TpAccordCtrl',
      restrict: 'E',
      link: function postLink() {
      }
    };
  }).controller('TpAccordCtrl', ['$scope', function ($scope) {


  }]);
