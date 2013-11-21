'use strict';

angular.module('meetingroomApp')
  .controller('MainCtrl', function ($scope) {

    $scope.state = {};

    $scope.toggleList = function() {
      if (typeof($scope.state.listRevealed) === 'undefined') {
        $scope.state.listRevealed = false;
      }
      $scope.state.listRevealed = !$scope.state.listRevealed;
    };

  });
