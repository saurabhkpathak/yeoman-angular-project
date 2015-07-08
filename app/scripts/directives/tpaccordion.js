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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the tpAccordion directive');
      }
    };
  });
