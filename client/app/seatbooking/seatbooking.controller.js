'use strict';

(function () {

  class SeatbookingComponent {
    constructor($http, $scope, socket) {

      this.$http = $http;
      this.socket = socket;
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('seatbooking');
      });
    }

    $onInit() {
      // $(document).ready(function () {
      //   $('.seatno').click(function () {
      //     var id = $(this).attr('id');
      //     alert(id);
      //     $('#' + id).css('background-color', 'red');
      //   });
      // });


      $(document).on('click', '.seatno', function (event) {
        //alert(event.target.id);
        $('#' + event.target.id).css('background-color', 'red');
        
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

