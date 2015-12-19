import synSvg from './synSvg.directive.js';

describe('Directive: synSvg', function () {
  let $rootScope;
  let $compile;

  beforeEach(angular.mock.module(synSvg));

  beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {
    'use strict';
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  afterEach(function(){
    'use strict';
    $rootScope = undefined;
    $compile = undefined;
  });

  it('should display a bunch of SVGs', function(){
    'use strict';

    let element = $compile('<syn-svg></syn-svg>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('syn-logo');
    expect(element.html()).toContain('syn-title');
    expect(element.html()).toContain('syn-slogan');
  });
});
