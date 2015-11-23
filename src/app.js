import 'synbydesign.design/src/styles/main.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';
import detail from './features/detail';
import masthead from './directives/masthead/masthead.directive.js';

angular.module('app', [uirouter, home, detail, masthead])
  .config(routing);