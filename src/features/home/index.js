import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import aboutService from '../../services/about.service.js';
import portfolioService from '../../services/portfolio.service.js';
import aboutDirective       from '../../directives/about/about.directive';
import portfolioListDirective  from '../../directives/portfolioList/portfolioList.directive';
import loading from '../../directives/loading/loading.directive.js';

export default angular.module('app.home', [uirouter, aboutService, portfolioService, aboutDirective, portfolioListDirective, loading])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
