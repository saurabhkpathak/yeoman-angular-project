'use strict';

describe('Directive: tpAccordion', function () {

  // load the directive's module
  beforeEach(module('yeomanProject'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tp-accordion></tp-accordion>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tpAccordion directive');
  }));
});
