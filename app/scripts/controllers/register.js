'use strict';

angular.module('meetingroomApp')
  .controller('RegisterCtrl', function ($scope, $http, API_ROOT) {

    $scope.state = {};

    $scope.save = function(user) {
      if (user.$valid) {
        $scope.state.loading = true;
        $http.post(API_ROOT + '/users', { user: user }).success(function() {
          $scope.state.loading = false;
          $scope.state.registered = true;
        }).error(function(res) {
          $scope.state.loading = false;
          $scope.state.errors = res;
        });
      } else {
        if (typeof user.$error !== 'undefined') {
          if (user.$error.required) { $scope.state.errors = ['Email is required']; }
          if (user.$error.email) { $scope.state.errors = ['Email is invalid']; }
        }
      }
    };

  });
