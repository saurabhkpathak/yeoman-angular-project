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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tpAccordionHead directive');
      }
    };
  });
