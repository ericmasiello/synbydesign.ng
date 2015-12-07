import 'synbydesign.design/src/styles/main.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import detail from './features/detail';
import masthead from './directives/masthead/masthead.directive';
import ariaLoadingState from './directives/ariaLoadingState/ariaLoadingState.directive'

angular.module('app', [uirouter, home, detail, masthead, ariaLoadingState])
  .config(routing)
  .run(function($rootScope){
    "use strict";

    $rootScope
      .$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){

        $rootScope.$emit('app-is-loading');
      });

    $rootScope
      .$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams){

        $rootScope.$emit('app-done-loading');
      });
  });