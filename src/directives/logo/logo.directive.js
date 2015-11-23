import angular from 'angular';

function logo() {
  return {
    restrict: 'E',
    template: require('./logo.html')
  }
}

export default angular.module('directives.logo', [])
  .directive('logo', logo)
  .name;
