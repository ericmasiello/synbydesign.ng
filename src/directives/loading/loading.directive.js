import angular from 'angular';

export default class LoadingController {
  constructor($rootScope) {
    'use strict';

    $rootScope.$on('app-is-loading', function(){

      this.isLoading = true;

    }.bind(this));

    $rootScope.$on('app-done-loading', function(){

      this.isLoading = false;

    }.bind(this));
  }
};

LoadingController.$inject = ['$rootScope'];

function loading() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    template: require('./loading.html'),
    controllerAs: 'loading',
    controller: LoadingController
  }
}

export default angular.module('directives.loading', [])
  .directive('loading', loading)
  .name;
