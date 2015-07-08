'use strict';

/**
 * @ngdoc directive
 * @name yeomanProject.directive:tpAccordion
 * @description
 * # tpAccordion
 */
angular.module('yeomanProject')
  .directive('tpAccordion', function () {
    return {
      restrict: 'E',
      transclude: true,
      link: function postLink(scope, element, attrs) {
      }
    };
  });
