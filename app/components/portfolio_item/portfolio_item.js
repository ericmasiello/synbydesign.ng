/**
 * Created by ericmasiello on 10/3/15.
 */
angular.module('myApp').directive('portfolioItem', function () {
  return {
    template: '<div class="portfolio__item">' +
                '<span class="h4  portfolio__title">' +
                  '<span class="portfolio__title__text">{{title}}</span>' +
                '</span>' +
                '<a class="portfolio__thumb" aria-label="View detailed image of {{title}}" ui-sref=".detail({ id: id })">' +
                  '<img class="portfolio__thumb__img" ng-src="{{imgUrl}}" alt="Preview image of {{title}}">' +
                '</a>' +
              '</div>' +
              '<ul class="skills  small" aria-label="Skills used to make {{title}}" ng-if="skills.length">' +
                '<li role="presentation" ng-repeat="skill in skills track by $index">' +
                  '<span class="bullet" aria-hidden="true"></span>' +
                  '<span> {{skill}}</span>' +
                '</li>' +
              '</ul>',
    restrict: 'E',
    scope: {
      title: '@',
      imgUrl: '@',
      id: '@',
      skills: '='
    }
  }
});