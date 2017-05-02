'use strict';

angular.module('movieMelaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/route', {
        template: '<route></route>'
      });
  });
