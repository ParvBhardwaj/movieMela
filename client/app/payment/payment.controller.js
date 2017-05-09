'use strict';

(function () {

  class PaymentComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.paymentData = {};
      this.allpaymentsData = {};

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('payment');
      });
    }
  }

  angular.module('movieMelaApp')
    .component('payment', {
      templateUrl: 'app/payment/payment.html',
      controller: PaymentComponent,
      controllerAs: 'paymentCtrl'
    });

})();
