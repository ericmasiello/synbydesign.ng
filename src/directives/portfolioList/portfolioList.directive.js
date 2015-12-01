import angular from 'angular';
import PortfolioItem from '../portfolioItem/portfolioItem.directive';

export default class PortfolioListController {
  constructor() {
    "use strict";
  }
}

function PortfolioList() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      title: '@',
      portfolioItems: '='
    },
    controllerAs: 'portfolioList',
    controller: PortfolioListController,
    template: require('./portfolioList.html')
  }
}

export default angular.module('directives.portfolioList', [PortfolioItem])
  .directive('portfolioList', PortfolioList)
  .name;
