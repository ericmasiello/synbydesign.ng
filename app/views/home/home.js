'use strict';

angular.module('myApp.home', ['ngRoute', 'myApp.services'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    });
  }])

.controller('HomeCtrl', [function(){

  }]);

  //.controller('HomeCtrl', ['$scope', 'Portfolio',
  //  function ($scope, Portfolio) {
  //
  //    //$scope.models = {};
  //    //
  //    //var loadedPortfolio = function loadedPortfolio(resp){
  //    //  $scope.models.portfolioList = resp;
  //    //};
  //    //
  //    //Portfolio.load().then(loadedPortfolio);
  //  }]);