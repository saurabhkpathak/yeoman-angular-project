'use strict';

describe('Controller: AccordiontestCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanProject'));

  var AccordiontestCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    AccordiontestCtrl = $controller('AccordiontestCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccordiontestCtrl.awesomeThings.length).toBe(3);
  });
});
