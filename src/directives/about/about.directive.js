import angular from 'angular';

function about() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require('./about.html')
  }
}

export default angular.module('directives.about', [])
  .directive('about', about)
  .name;
