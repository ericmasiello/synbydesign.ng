import angular from 'angular';
import logo from '../logo/logo.directive.js';

function navigation() {
  return {
    restrict: 'E',
    template: require('./navigation.html')
  }
}

export default angular.module('directives.navigation', [logo])
  .directive('navigation', navigation)
  .name;
