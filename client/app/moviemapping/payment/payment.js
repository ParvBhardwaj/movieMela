'use strict';

angular.module('movieMelaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/payment', {
        template: '<payment></payment>'
      });
  });
