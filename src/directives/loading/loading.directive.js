import angular from 'angular';

class LoadingController {
  constructor($rootScope) {
    'use strict';

    let self = this;

    $rootScope.$on('app-is-loading', function appIsLoading(){

      self.isLoading = true;
    });

    $rootScope.$on('app-done-loading', function appDoneLoading(){

      self.isLoading = false;
    });
  }
}

LoadingController.$inject = ['$rootScope'];

const loading = {
  bindings: {},
  template: require('./loading.html'),
  controllerAs: 'loading',
  controller: LoadingController
};

export default angular.module('directives.loading', [])
  .component('loading', loading)
  .name;
