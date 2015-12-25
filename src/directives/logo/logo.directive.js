import angular from 'angular';

class LogoCtrl {
  constructor(){
    'use strict';
  }
}

const logo = {
  bindings: {
    logoId: '@'
  },
  controller: LogoCtrl,
  controllerAs: 'logo',
  template: require('./logo.html')
};

export default angular.module('directives.logo', [])
  .component('logo', logo)
  .name;
