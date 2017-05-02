'use strict';

(function () {

  class MoviemappingComponent {
    constructor($http, $scope, socket) {

      this.$http = $http;
      this.socket = socket;
      this.moviemappingdata = {};
      this.allmoviesmappingsData = {};


      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('moviemapping');
      });
    }

    $onInit() {
      this.$http.get('/api/theaters').then(response => {
        this.alltheaterData = response.data;
        this.socket.syncUpdates('theaters', this.alltheaterData);
      });

      this.$http.get('/api/movies').then(response => {
        this.allMoviesData = response.data;
        this.socket.syncUpdates('movies', this.allMoviesData);
      });
    }

  }//end class

  angular.module('movieMelaApp')
    .component('moviemapping', {
      templateUrl: 'app/moviemapping/moviemapping.html',
      controller: MoviemappingComponent,
      controllerAs: 'moviemappingCtrl'
    });

})();
