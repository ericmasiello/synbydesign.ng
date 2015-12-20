import angular from 'angular';
import skills from '../skills/skills.directive';

class PortfolioItemController {
  constructor() {
    'use strict';

    if( this.detail && ( typeof this.detail.alt_text != 'string' || this.detail.alt_text.length == 0 ) ){
      this.detail.alt_text = this.detail.title;
    }
  }
}

function PortfolioItem() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      detail: '=',
      classNames: '@',
      detailView: '@',
      imgClassNames: '@'
    },
    controllerAs: 'item',
    controller: PortfolioItemController,
    template: function templatePortfolioItem(elm, attrs){

      if( attrs.detailView === 'true'){
        return require('./portfolioItemDetail.html')
      }

      return require('./portfolioItem.html');
    }
  }
}

export default angular.module('directives.portfolioItem', [skills])
  .directive('portfolioItem', PortfolioItem)
  .name;
