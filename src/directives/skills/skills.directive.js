import angular from 'angular';

class SkillsController {
  constructor() {
  }
}

const skills = {
  bindings: {
    title: '@',
    items: '=',
    classNames: '@',
    bulletClassNames: '@'
  },
  template: require('./skills.html'),
  controllerAs: 'skills',
  controller: SkillsController
};

export default angular.module('directives.skills', [])
  .component('skills', skills)
  .name;
