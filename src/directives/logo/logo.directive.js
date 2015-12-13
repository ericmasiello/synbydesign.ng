import angular from 'angular';

class LogoCtrl {
  constructor(){
    'use strict';
  }
}

function logo() {
  return {
    scope: {},
    bindToController: {
      logoId: '@'
    },
    controller: LogoCtrl,
    controllerAs: 'logo',
    restrict: 'E',
    template: require('./logo.html')
  }
}

export default angular.module('directives.logo', [])
  .directive('logo', logo)
  .name;
