'use strict';

describe('portfolio_item', function() {

  var compile, scope, directiveElem;
  beforeEach(module('myApp'));

  beforeEach(inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope.$new();
  }));

  function getCompiledElement(props){

    scope.id = props.id;
    scope.skills = props.skills;
    scope.title = props.title;
    scope.imgUrl = props.imgUrl;

    var element = angular.element('<portfolio_item title="{{title}}" img-url="{{imgUrl}}" id="{{id}}" skills="skills" />');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
  }

  describe('HTML', function(){

    it('should set the image and link properties....', function(){

      var props = {
        title: 'Test Title',
        imgUrl: 'img.jpg',
        id: 2,
        skills: null
      };

      directiveElem = getCompiledElement(props);
      expect(angular.element(directiveElem).find('img').attr('src')).toBe(props.imgUrl);
      expect(angular.element(directiveElem).find('img').attr('alt')).toBe('Preview image of ' + props.title);
      expect(angular.element(directiveElem).find('a').attr('aria-label')).toBe('View detailed image of ' + props.title);
      expect(angular.element(directiveElem).find('a').attr('aria-label')).toBe('View detailed image of ' + props.title);
    });

    it('should handle display of skills....', function(){

      expect(angular.element(getCompiledElement({
        title: '',
        imgUrl: '',
        id: null,
        skills: []
      })).find('ul').length).toBe(0);

      expect(angular.element(getCompiledElement({
        title: '',
        imgUrl: '',
        id: null,
        skills: null
      })).find('li').length).toBe(0);

      expect(angular.element(getCompiledElement({
        title: '',
        imgUrl: '',
        id: null,
        skills: []
      })).find('li').length).toBe(0);

      expect(angular.element(getCompiledElement({
        title: '',
        imgUrl: '',
        id: null,
        skills: ['this', 'and', 'that']
      })).find('li').length).toBe(3);
    })
  });
});