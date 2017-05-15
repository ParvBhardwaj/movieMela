'use strict';

(function () {

  class SeatbookingComponent {
    constructor($http, $scope, socket, $rootScope) {

      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.$rootScope = $rootScope;

      angular.merge(this.book2pay, $rootScope.run2book);
      this.selectedSeats = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('seatbooking');
      });

    }// end constructor
    calcTotal() {

      var total = 0.0;

      for (var s = 0; s < this.selectedSeats.length; s++) {
        var row = this.selectedSeats[s].substring(0, 1);
        if (row == 'A' || row == 'B' || row == 'C')
          total += 300;
        else if (row == 'D' || row == 'E' || row == 'F' || row == 'G')
          total += 250;
        else if (row == 'H' || row == 'I' || row == 'J' || row == 'K')
          total += 200;
      }
      this.Total = total;
    }
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
      this.showSelectedSeats = this.selectedSeats.join(', ');
      this.calcTotal();
    }

    $onInit() {

    }//end on init
    Addpayment() {
      this.$rootScope.book2pay = this.book2pay;
      this.$rootScope.book2pay.selectedSeats = this.selectedSeats;
    }
  }// end class


  angular.module('movieMelaApp')
    .component('seatbooking', {
      templateUrl: 'app/seatbooking/seatbooking.html',
      controller: SeatbookingComponent,
      controllerAs: 'seatbookingCtrl'
    });

})();

