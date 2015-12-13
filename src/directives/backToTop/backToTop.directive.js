import angular from 'angular';
import appConsts from '../../consts/appConsts';

class BackToTopCtrl {
  constructor($anchorScroll){
    'use strict';
    this.$anchorScroll = $anchorScroll;
  }
  backToTop(e) {
    'use strict';
    e.preventDefault();

    this.$anchorScroll(appConsts.UIID.masthead);
    document.getElementById(appConsts.UIID.logo).focus();
  }
}

BackToTopCtrl.$inject = ['$anchorScroll'];

function backToTop(){
  'use strict';

  return {
    restrict: 'E',
    scope: {},
    controller: BackToTopCtrl,
    bindToController: true,
    controllerAs: 'back',
    template: require('./backToTop.html')
  }
}

export default angular.module('directives.backToTop', [])
  .directive('backToTop', backToTop)
  .name;