import angular from 'angular';
import navigation from '../navigation/navigation.directive.js';

class MastheadCtrl {
  constructor(){
    'use strict';
  }
}

function masthead() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      mastheadId: '@',
      logoId: '@'
    },
    controller: MastheadCtrl,
    controllerAs: 'masthead',
    template: require('./masthead.html')
  }
}

export default angular.module('directives.masthead', [navigation])
  .directive('masthead', masthead)
  .name;
