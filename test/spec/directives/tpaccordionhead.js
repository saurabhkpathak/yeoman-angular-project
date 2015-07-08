'use strict';

describe('Directive: tpAccordionHead', function () {

  // load the directive's module
  beforeEach(module('yeomanProject'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tp-accordion-head></tp-accordion-head>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tpAccordionHead directive');
  }));
});
