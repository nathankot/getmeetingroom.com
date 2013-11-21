'use strict';

describe('Directive: mrSocialite', function () {

  // load the directive's module
  beforeEach(module('meetingroomApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, socialite, $compile) {
    scope = $rootScope.$new();
    spyOn(socialite, 'load').andCallThrough();

    element = angular.element('<div mr-socialite></div>');
    element = $compile(element)(scope);
  }));

  it('should call socialite', inject(function (socialite) {
    expect(socialite.load).toHaveBeenCalled();
  }));
});
