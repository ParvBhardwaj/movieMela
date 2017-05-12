'use strict';

(function () {

  class SeatbookingComponent {
    constructor($http, $scope, socket, $rootScope) {

      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.$rootScope = $rootScope;
      console.log($rootScope.run2book);
      this.book2pay = $rootScope.run2book;

      // this.selectedSeats = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('seatbooking');
      });

    }


    $onInit() {
      var selectedSeats = [];

      $(document).on('click', '.seatno', function (event) {
        var found = selectedSeats.indexOf(event.target.id);

        if (found > -1) {
          $('#' + event.target.id).css('background-color', '#FF3333');
          selectedSeats.splice(found, 1);
        }
        else {
          $('#' + event.target.id).css('background-color', '#96FF33');
          selectedSeats.push(event.target.id);
        }
        console.log(selectedSeats);
        var ss = document.getElementById('sSeats');
        ss.innerHTML = selectedSeats.join(', ');

        // $('#sSeats').innerHTML = selectedSeats.join(', ');
        // debugger;
      });
      //write code using 

    }

  }// end class


  angular.module('movieMelaApp')
    .component('seatbooking', {
      templateUrl: 'app/seatbooking/seatbooking.html',
      controller: SeatbookingComponent,
      controllerAs: 'seatbookingCtrl'
    });

})();

