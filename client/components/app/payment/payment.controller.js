'use strict';

(function () {

  class PaymentComponent {
    constructor($http, $scope, socket, $rootScope) {
      this.$http = $http;
      this.socket = socket;
      this.$rootScope = $rootScope;
      this.bookdt = $rootScope.book2pay;
      this.run2book = $rootScope.run2book;

      //angular.merge(this.book2pay, $rootScope.book2pay);

      this.payData = {};
      console.log(this.bookdt);

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('payment');
      });
    }//end  constructor


    payNow() {

      this.payData.total = this.bookdt.total;

      this.$http.post('/api/payments',
        angular.toJson(this.payData)
      );

      this.$http.post('/api/seatbookings ',
        angular.toJson(this.bookdt)
      );
      alert("Booking Successfull  !!! \nYour Payment is done.");
      delete $rootScope.run2book.date;
      //$rootScope.run2book = {};
      delete $rootScope.run2book;
    }

  }//end class PaymentComponent

  angular.module('movieMelaApp')
    .component('payment', {
      templateUrl: 'app/payment/payment.html',
      controller: PaymentComponent,
      controllerAs: 'paymentCtrl'
    });

})();
