'use strict';

(function () {

  class SeatbookingComponent {
    constructor() {


    }
  }
  // $(document).ready(function() {
  //   $('.seatno').click(function ()){
  //     alert('Event')
  //   })


/*
selectSeats()
  {
      var row, lselected = [], lcount=0;
      for(var i=0; i < this.selectedBooking.seatPlan.rows.length ; i++)
      {
        row = this.selectedBooking.seatPlan.rows[i];
        for(var j=0; j < row.payment_id.length; j++)
        {
          if(row.payment_id[j]=== '-1')
          {
            lselected[lselected.length] = (row.rn + row.s[j]);
            lcount++;
          }
        }
      }
      this.showData.selected = lselected.join();
      this.showData.selectedCount = lcount;
      this.showData.selectTotal =  parseFloat(this.selectedBooking.seatPlan.price) * lcount + this.showData.otherCharges;
  }

*/

  angular.module('movieMelaApp')
    .component('seatbooking', {
      templateUrl: 'app/seatbooking/seatbooking.html',
      controller: SeatbookingComponent,
      controllerAs: 'seatbookingCtrl'
    });

})();
