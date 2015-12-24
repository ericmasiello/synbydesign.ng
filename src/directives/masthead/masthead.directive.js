import angular from 'angular';
import navigation from '../navigation/navigation.directive.js';

class MastheadCtrl {
  constructor() {
    'use strict';
  }
}

const masthead = {
  bindings: {
    mastheadId: '@',
    logoId: '@',
    showNav: '='
  },
  controller: MastheadCtrl,
  controllerAs: 'masthead',
  template: require('./masthead.html')
};

export default angular.module('directives.masthead', [navigation])
  .component('masthead', masthead)
  .name;