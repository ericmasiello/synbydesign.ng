import angular from 'angular';

function synSvg(){
  'use strict';

  return {
    restrict: 'E',
    template: require('./synSvg.html')
  }
}

export default angular.module('directive.synSvg', [])
  .directive('synSvg', synSvg)
  .name;