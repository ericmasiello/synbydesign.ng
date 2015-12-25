import angular from 'angular';
import logo from '../logo/logo.directive.js';

class NavigationCtrl {
  constructor($anchorScroll){
    'use strict';
    this.$anchorScroll = $anchorScroll;
    this.showNav = ( typeof this.showNav !== 'boolean' ) ? true : this.showNav;
  }
  scrollTo(location, e){
    'use strict';

    e.preventDefault();
    this.$anchorScroll(location);
    document.getElementById(location).focus();
  }
}

NavigationCtrl.$inject = ['$anchorScroll'];

const navigation = {
  bindings: {
    logoId: '@',
    showNav: '=?'
  },
  controller: NavigationCtrl,
  controllerAs: 'nav',
  template: require('./navigation.html')
};

export default angular.module('directives.navigation', [logo])
  .component('navigation', navigation)
  .name;
