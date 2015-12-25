import angular from 'angular';
import AboutModel from './aboutModel.service.js';

export default angular.module('services.about', [])
  .service('AboutModel', AboutModel)
  .name;