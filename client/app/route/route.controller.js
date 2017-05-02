'use strict';

(function(){

class RouteComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('movieMelaApp')
  .component('route', {
    templateUrl: 'app/route/route.html',
    controller: RouteComponent,
    controllerAs: 'routeCtrl'
  });

})();
