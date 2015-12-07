import angular from 'angular';
import skills from '../skills/skills.directive';

class PortfolioItemController {
  constructor() {
    "use strict";

    this.showLink = typeof this.showLink === 'boolean' ? this.showLink : this.showLink === 'false' ? false : true;
  }
}

function PortfolioItem() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      detail: '=',
      classNames: '@',
      detailView: '@'
    },
    controllerAs: 'item',
    controller: PortfolioItemController,
    template: function templatePortfolioItem(elm, attrs){

      if( attrs.detailView === 'true'){
        return require('./portfolioItemDetail.html')
      }

      return require('./portfolioItem.html');
    },
    link: function(scope){
      "use strict";
      //debugger;
    }
  }
}

export default angular.module('directives.portfolioItem', [skills])
  .directive('portfolioItem', PortfolioItem)
  .name;
