'use strict';

angular.module('myApp.detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail', {
    templateUrl: 'views/detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', [function() {

}]);