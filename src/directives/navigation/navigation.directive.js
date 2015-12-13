import angular from 'angular';
import logo from '../logo/logo.directive.js';

class NavigationCtrl {
  constructor($anchorScroll){
    'use strict';
    this.$anchorScroll = $anchorScroll;
    this.showNav = this.showNav === false ? false : true;
  }
  scrollTo(location, e){
    'use strict';

    e.preventDefault();

    this.$anchorScroll(location);
    document.getElementById(location).focus();
  }
}

NavigationCtrl.$inject = ['$anchorScroll'];

function navigation() {
  return {
    scope: {},
    bindToController: {
      logoId: '@',
      showNav: '='
    },
    controller: NavigationCtrl,
    controllerAs: 'nav',
    restrict: 'E',
    template: require('./navigation.html')
  }
}

export default angular.module('directives.navigation', [logo])
  .directive('navigation', navigation)
  .name;
