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

    Addmoivemapping() {
      alert("hogyaa");
      console.log(this.moviemappingData);

      this.$http.post('/api/moviemapping',
        angular.toJson(this.moviemappingData)
      );
      console.log(this.moviemappingData);
      this.MovieName = '';
      this.CityName = '';
      this.CineName = '';
      this.ShowTimings = '';
      this.ScheduleDate = '';
    }
    $onInit() {
      this.$http.get('/api/theaters').then(response => {
        this.alltheaterData = response.data;
        this.socket.syncUpdates('theaters', this.alltheaterData);
        alert(this.alltheaterData);
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
