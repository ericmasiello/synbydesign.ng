import angular from 'angular';
import skills from '../skills/skills.directive';

class PortfolioItemController {
  constructor() {
    'use strict';

    /*
     * Set default alt text if its not defined
     */
    if( this.detail && ( typeof this.detail.alt_text != 'string' || this.detail.alt_text.length == 0 ) ){
      this.detail.alt_text = this.detail.title;
    }
  }
}

function templatePortfolioItem($element, $attrs){

  if( $attrs.detailView === 'true'){
    return require('./portfolioItemDetail.html');
  }
  return require('./portfolioItem.html');
}

const portfolioItem = {
  bindings: {
    detail: '=',
    classNames: '@',
    detailView: '@',
    imgClassNames: '@'
  },
  controllerAs: 'item',
  controller: PortfolioItemController,
  template: templatePortfolioItem
};

export default angular.module('directives.portfolioItem', [skills])
  .component('portfolioItem', portfolioItem)
  .name;
