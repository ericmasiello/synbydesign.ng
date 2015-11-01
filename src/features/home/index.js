import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../../services/randomNames.service';
import greeting    from '../../directives/greeting.directive';
import about       from '../../directives/about/about.directive';
import portfolioList  from '../../directives/portfolioList/portfolioList.directive';

export default angular.module('app.home', [uirouter, randomNames, greeting, about, portfolioList])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
