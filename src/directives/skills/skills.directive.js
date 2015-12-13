import angular from 'angular';

class SkillsController {
  constructor() {
  }
}

SkillsController.$inject = [];

function skills() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      title: '@',
      items: '=',
      classNames: '@',
      bulletClassNames: '@'
    },
    template: require('./skills.html'),
    controllerAs: 'skills',
    controller: SkillsController
  }
}

export default angular.module('directives.skills', [])
  .directive('skills', skills)
  .name;
