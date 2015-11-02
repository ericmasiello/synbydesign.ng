import angular from 'angular';

export default class AboutController {
  constructor($sce) {

    this.content = $sce.trustAsHtml(this.srcContent);
  }
}

AboutController.$inject = ['$sce'];

function about() {
  return {
    restrict: 'E',
    scope: {
      srcContent: '@'
    },
    bindToController: true,
    template: require('./about.html'),
    controllerAs: 'about',
    controller: AboutController
  }
}

export default angular.module('directives.about', [])
  .directive('about', about)
  .name;
