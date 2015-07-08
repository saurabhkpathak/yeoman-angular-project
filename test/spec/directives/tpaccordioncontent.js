'use strict';

describe('Directive: tpAccordionContent', function () {

  // load the directive's module
  beforeEach(module('yeomanProject'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tp-accordion-content></tp-accordion-content>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tpAccordionContent directive');
  }));
});
