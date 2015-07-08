'use strict';

/**
 * @ngdoc directive
 * @name yeomanProject.directive:tpAccordionContent
 * @description
 * # tpAccordionContent
 */
angular.module('yeomanProject')
  .directive('tpAccordionContent', function () {
    return {
      transclude: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
