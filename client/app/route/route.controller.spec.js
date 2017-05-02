'use strict';

describe('Component: RouteComponent', function () {

  // load the controller's module
  beforeEach(module('movieMelaApp'));

  var RouteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RouteComponent = $componentController('route', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
