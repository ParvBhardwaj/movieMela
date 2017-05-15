'use strict';

(function () {

  class SeatbookingComponent {
    constructor($http, $scope, socket, $rootScope) {

      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.$rootScope = $rootScope;

      this.book2pay = $rootScope.run2book;
      this.selectedSeats = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('seatbooking');
      });

    }// end constructor

    sClick($event) {
      var elem = $event.currentTarget || $event.srcElement;
      var id = elem.id;
      var found = this.selectedSeats.indexOf(id);
      if (found > -1) {
        elem.style = '';
        this.selectedSeats.splice(found, 1);
      }
      else {
        elem.style = 'background-color:#96FF33;';
        this.selectedSeats.push(id);
      }
      console.log(this.selectedSeats);
    }

    $onInit() {
      // this.selectedSeats = ['z0'];


    }//end on init

  }// end class


  angular.module('movieMelaApp')
    .component('seatbooking', {
      templateUrl: 'app/seatbooking/seatbooking.html',
      controller: SeatbookingComponent,
      controllerAs: 'seatbookingCtrl'
    });

})();

