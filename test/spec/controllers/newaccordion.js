'use strict';

describe('Controller: NewaccordionCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanProject'));

  var NewaccordionCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    NewaccordionCtrl = $controller('NewaccordionCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewaccordionCtrl.awesomeThings.length).toBe(3);
  });
});
