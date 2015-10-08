'use strict';

describe('Directive: newCard', function () {

  // load the directive's module
  beforeEach(module('yumitzApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<new-card></new-card>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the newCard directive');
  }));
});
