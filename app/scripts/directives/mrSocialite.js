'use strict';

angular.module('meetingroomApp')
  .directive('mrSocialite', function (socialite) {
    return {
      restrict: 'A',
      link: function postLink(scope, $element) {
        socialite.load($element);
      }
    };
  });
