'use strict';

angular.module('myApp.portfolio', [])

  .controller('portfolioItemCtrl', ['$scope', function($scope) {

    $scope.model = {
      value: '2'
    };

    $scope.clickIt = function clickIt(){
      $scope.model.value = 'clicked the function';
    };
  }])

  .directive('portfolioItem', [function() {

    return {
      controller: 'portfolioItemCtrl',
      template: '<div>{{model.value}}</div>',
      link: function(scope, elm, attrs){

        //elm.on('click', function(){
        //  elm.text('clicked');
        //});
      }
    }

  }]);
