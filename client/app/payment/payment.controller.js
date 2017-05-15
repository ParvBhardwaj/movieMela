'use strict';

(function () {

  class PaymentComponent {
    constructor($http, $scope, socket, $rootScope) {
      this.$http = $http;
      this.socket = socket;
      this.$rootScope = $rootScope;

      angular.copy($rootScope.book2pay, this.book2pay);

      this.paymentData = {};


      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('payment');
      });
    }//end  constructor




  }//end class PaymentComponent

  angular.module('movieMelaApp')
    .component('payment', {
      templateUrl: 'app/payment/payment.html',
      controller: PaymentComponent,
      controllerAs: 'paymentCtrl'
    });

})();
