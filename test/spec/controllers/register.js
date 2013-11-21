'use strict';

ddescribe('Controller: RegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('meetingroomApp'));

  var RegisterCtrl,
    scope,
    $httpBackend,
    API_ROOT;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    API_ROOT = $injector.get('API_ROOT');
    RegisterCtrl = $controller('RegisterCtrl', { $scope: scope });
  }));

  describe('email has been entered', function() {
    beforeEach(function() {
      scope.user = { email: 'me@nathankot.com' };
    });

    describe('clicks on submit and save is called', function() {
      beforeEach(function() {
        spyOn(scope, 'save').andCallThrough();
      });

      it('should make a post request.', function() {
        $httpBackend.expectPOST(API_ROOT + '/users').respond(201, { email: 'me@nathankot.com' });
        scope.save(scope.user);
        $httpBackend.flush();
      });

      describe('email does not already exist', function() {
        beforeEach(function() {
          $httpBackend.when('POST', API_ROOT + '/users').respond(201, { email: 'me@nathankot.com' });
          scope.save(scope.user);
          $httpBackend.flush();
        });

        it('should set registered', function() {
          expect(scope.state.registered).toBe(true);
        });
      });

      describe('email already exists', function() {
        beforeEach(function() {
          $httpBackend.when('POST', API_ROOT + '/users').respond(412, ['Email already exists']);
          scope.save(scope.user);
          $httpBackend.flush();
        });

        it('should set the errors', function() {
          expect(scope.state.errors.length).toEqual(1);
        });

        it('shouldnt set registered', function() {
          expect(scope.state.registered).not.toBe(true);
        });
      });
    });
  });
});
