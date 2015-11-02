import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import aboutService from '../../services/about.service.js';
import greetingDirective    from '../../directives/greeting.directive';
import aboutDirective       from '../../directives/about/about.directive';
import portfolioListDirective  from '../../directives/portfolioList/portfolioList.directive';

export default angular.module('app.home', [uirouter, aboutService, randomNames, greetingDirective, aboutDirective, portfolioListDirective])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
