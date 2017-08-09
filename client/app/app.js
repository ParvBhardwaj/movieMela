'use strict';

angular.module('movieMelaApp', ['movieMelaApp.auth', 'movieMelaApp.admin', 'movieMelaApp.constants',
  'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io',
  'validation.match', 'ui.filters', 'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });


angular.module('dhirFilmsApp', ['dhirFilmsApp.auth', 'dhirFilmsApp.admin', 'dhirFilmsApp.constants',
  'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'validation.match'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
