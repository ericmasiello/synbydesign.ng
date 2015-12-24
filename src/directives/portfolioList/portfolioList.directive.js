import angular from 'angular';
import PortfolioItem from '../portfolioItem/portfolioItem.directive';

export default class PortfolioListController {
  constructor() {
    'use strict';
  }
}

const portfolioList = {
  bindings: {
    title: '@',
    portfolioItems: '='
  },
  controllerAs: 'portfolioList',
  controller: PortfolioListController,
  template: require('./portfolioList.html')
};

export default angular.module('directives.portfolioList', [PortfolioItem])
  .component('portfolioList', portfolioList)
  .name;
