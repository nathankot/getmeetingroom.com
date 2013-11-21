'use strict';

angular.module('meetingroomApp')
  .constant('API_ROOT', (function(){
    return '//' + 'api.' + window.location.host;
  })());
