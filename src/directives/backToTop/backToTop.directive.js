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

const backToTop = {
  bindings: {},
  controller: BackToTopCtrl,
  controllerAs: 'back',
  template: require('./backToTop.html')
};

export default angular.module('directives.backToTop', [])
  .component('backToTop', backToTop)
  .name;