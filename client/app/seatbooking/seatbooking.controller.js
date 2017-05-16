'use strict';

(function () {

  class SeatbookingComponent {
    constructor($http, $scope, socket, $rootScope, $location) {

      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.$rootScope = $rootScope;
      this.$location = $location;

      this.SeatData = {};
      this.AllSeatData = {};
      this.book2pay = {};
      angular.merge(this.book2pay, $rootScope.run2book);
      this.selectedSeats = [];
      this.intCharg = 50;
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('seatbooking');
      });

    }// end constructor
    // seatbooking() {

    //   this.$http.post('/api/seatbookings ',

    //     // angular.toJson(this.selectedSeats)
    //   );

    //   var SeatbookingSchema = new mongoose.Schema({
    //     movie: String,
    //     city: String,
    //     cine: String,
    //     date: String,
    //     time: String,
    //     seats: [String]
    //   });



    // }
    Addseat() {
      alert("hogyaa");
      // console.log(this.SeatData);

      // this.$http.post('/api/seatbookings ',
      //   angular.toJson(this.SeatData)
      // );
      // console.log(this.SeatData);
      // this.Cine = '';
      // this.City = '';
      // this.movie = '',
      //   this.city = '',
      //   this.cine = '',
      //   this.date = '',
      //   this.time = '',
      //   this.seats = [];


    }


    calcTotal() {

      var total = this.intCharg;

      for (var s = 0; s < this.selectedSeats.length; s++) {
        var row = this.selectedSeats[s].substring(0, 1);
        if (row == 'A' || row == 'B' || row == 'C')
          total += 300;
        else if (row == 'D' || row == 'E' || row == 'F' || row == 'G' || row == 'H')
          total += 250;
        else if (row == 'I' || row == 'J' || row == 'K' || row == 'L')
          total += 200;
      }
      this.total = total;
    }
    sClick($event) {
      var elem = $event.currentTarget || $event.srcElement;
      var id = elem.id;

      //two task 
      // get find if the clicked seat is in booked seats (onInit)
      //return; and exit this function


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
      // this.$http.get('/api/seatbookings').then(response => {
      //   this.AllSeatData = response.data;
      //   this.socket.syncUpdates('seatbookings', this.AllSeatData);
      // });
      //two task 
      // get seats booked for the date/ time/ theater/ movie/
      //if seat is booked disable it
    }//end on init
    goPayment() {

      this.$rootScope.book2pay = angular.merge({}, this.book2pay);
      this.$rootScope.book2pay.selectedSeats = this.selectedSeats;
      this.$rootScope.book2pay.total = this.total;
      this.$rootScope.book2pay.intCharg = this.intCharg;

      // add more fields in book2pay from this

      this.$location.path('/payment');
    }
  }// end class


  angular.module('movieMelaApp')
    .component('seatbooking', {
      templateUrl: 'app/seatbooking/seatbooking.html',
      controller: SeatbookingComponent,
      controllerAs: 'seatbookingCtrl'
    });

})();

