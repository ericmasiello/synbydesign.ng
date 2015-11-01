import angular from 'angular';

function navigation() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require('./navigation.html')
  }
}

export default angular.module('directives.navigation', [])
  .directive('navigation', navigation)
  .name;
