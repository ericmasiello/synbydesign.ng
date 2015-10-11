'use strict';

describe('myApp.portfolio module', function() {
  beforeEach(module('myApp.portfolio', 'tpl/portfolio-item.html'));

  describe('myApp.portfolio item directive', function() {

    it('should sum of the value', function() {
      //module(function($provide) {
      //  $provide.value('version', 'TEST_VER');
      //});
      inject(function($compile, $rootScope) {

        var element = $compile('<portfolio-item></portfolio-item>')($rootScope);
        $rootScope.$digest();

        expect(element.text()).toEqual('2');

        $rootScope.clickIt();
        $rootScope.$digest();

        expect(element.text()).toEqual('clicked the function');
      });
    });

  });
});
