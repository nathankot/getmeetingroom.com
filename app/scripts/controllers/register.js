'use strict';

angular.module('meetingroomApp')
  .controller('RegisterCtrl', function ($scope, $http, API_ROOT) {

    $scope.state = {};
    $scope.save = function(user) {
      if (user.$valid) {
        $http.post(API_ROOT + '/users', { user: user }).success(function() {
          $scope.state.registered = true;
        }).error(function(res) {
          $scope.state.errors = res;
        });
      } else {
        $scope.state.errors = ['Email is invalid'];
      }
    };

  });
