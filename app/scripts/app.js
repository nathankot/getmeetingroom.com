'use strict';

angular.module('meetingroomApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('meetingroomApp').constant('lodash', window._);
angular.module('meetingroomApp').constant('jQuery', window.$);
angular.module('meetingroomApp').constant('socialite', window.Socialite);
