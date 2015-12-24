import angular from 'angular';

export default class AboutController {
  constructor($sce) {

    this.content = $sce.trustAsHtml(this.srcContent);
  }
}

AboutController.$inject = ['$sce'];

const about = {
  bindings: {
    srcContent: '@'
  },
  template: require('./about.html'),
  controllerAs: 'about',
  controller: AboutController
};

export default angular.module('directives.about', [])
  .component('about', about)
  .name;