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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tpAccordionContent directive');
      }
    };
  });
