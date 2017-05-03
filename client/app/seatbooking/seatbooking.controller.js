'use strict';

(function () {

  class SeatbookingComponent {
    constructor($http, $scope, socket) {

      this.$http = $http;
      this.socket = socket;
      // this.seatbookingdata = {};
      // this.allseatingbookingData = {};


      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('seatbooking');
      });
    }

  }// end class


  angular.module('movieMelaApp')
    .component('seatbooking', {
      templateUrl: 'app/seatbooking/seatbooking.html',
      controller: SeatbookingComponent,
      controllerAs: 'seatbookingCtrl'
    });

})();

