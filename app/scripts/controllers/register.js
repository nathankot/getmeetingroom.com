'use strict';

angular.module('meetingroomApp')
  .controller('RegisterCtrl', function ($scope, $http, API_ROOT) {

    $scope.state = {};
    $scope.save = function(model) {
      $http.post(API_ROOT + '/users', { user: model }).success(function() {
        $scope.state.registered = true;
      }).error(function(res) {
        $scope.state.errors = res;
      });
    };

  });
