import angular from 'angular';
import navigation from '../navigation/navigation.directive.js';

function masthead() {
  return {
    restrict: 'E',
    template: require('./masthead.html')
  }
}

export default angular.module('directives.masthead', [navigation])
  .directive('masthead', masthead)
  .name;
