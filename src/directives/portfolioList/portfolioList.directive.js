import angular from 'angular';
import portfolioItem from '../portfolioItem/portfolioItem.directive';

function portfolioList() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: require('./portfolioList.html')
  }
}

export default angular.module('directives.portfolioList', [portfolioItem])
  .directive('portfolioList', portfolioList)
  .name;
