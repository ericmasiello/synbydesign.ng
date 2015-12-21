import 'synbydesign.design/src/styles/main.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import detail from './features/detail';
import masthead from './directives/masthead/masthead.directive';
import ariaLoadingState from './directives/ariaLoadingState/ariaLoadingState.directive';
import backToTop from './directives/backToTop/backToTop.directive';
import synSvg from './directives/synSvg/synSvg.directive';


function appRun($rootScope) {
  'use strict';

  $rootScope
    .$on('$stateChangeStart', function stateChangeStart() {

      $rootScope.$emit('app-is-loading');
    });

  $rootScope
    .$on('$stateChangeSuccess', function stateChangeSuccess() {

      $rootScope.$emit('app-done-loading');
    });
};

appRun.$inject = ['$rootScope'];

angular.module('app', [uiRouter, home, detail, masthead, ariaLoadingState, backToTop, synSvg])
  .config(routing)
  .run(appRun);