//import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './detail.routes';
import DetailController from './detail.controller';

export default angular.module('app.detail', [uirouter])
  .config(routing)
  .controller('DetailController', DetailController)
  .name;