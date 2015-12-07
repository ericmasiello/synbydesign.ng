import angular from 'angular';

class AriaLoadingStateController {
  constructor($element, $rootScope){
    'use strict';

    $rootScope.$on('app-is-loading', () => {

      $element.attr('aria-busy', true);
    });

    $rootScope.$on('app-done-loading', () => {

      $element.attr('aria-busy', false);
    });
  }
}

AriaLoadingStateController.$inject = ['$element', '$rootScope'];

function ariaLoadingState() {
  return {
    restrict: 'A',
    scope: false,
    controller: AriaLoadingStateController
  }
}

export default angular.module('directives.ariaLoadingState', [])
  .directive('ariaLoadingState', ariaLoadingState)
  .name;
