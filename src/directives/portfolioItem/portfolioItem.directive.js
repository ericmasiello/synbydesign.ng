import angular from 'angular';

function portfolioItem() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require('./portfolioItem.html')
  }
}

export default angular.module('directives.portfolioItem', [])
  .directive('portfolioItem', portfolioItem)
  .name;
