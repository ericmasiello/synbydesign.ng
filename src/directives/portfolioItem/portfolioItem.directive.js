import angular from 'angular';

export default class PortfolioItemController {
  constructor() {
    "use strict";
  }
}

function PortfolioItem() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      detail: '='
    },
    controllerAs: 'item',
    controller: PortfolioItemController,
    template: require('./portfolioItem.html'),
    link: function(scope){
      "use strict";
      //debugger;
    }
  }
}

export default angular.module('directives.portfolioItem', [])
  .directive('portfolioItem', PortfolioItem)
  .name;
