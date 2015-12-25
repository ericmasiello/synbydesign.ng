import angular from 'angular';

const synSvg = {
  restrict: 'E',
  template: require('./synSvg.html')
};

export default angular.module('directive.synSvg', [])
  .component('synSvg', synSvg)
  .name;