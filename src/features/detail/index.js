//import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './detail.routes';
import DetailController from './detail.controller';
import PortfolioItem from '../../directives/portfolioItem/portfolioItem.directive';

export default angular.module('app.detail', [uirouter, PortfolioItem])
  .config(routing)
  .controller('DetailController', DetailController)
  .name;