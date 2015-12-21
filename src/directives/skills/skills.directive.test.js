import directive from './skills.directive';

describe('Directive: skills', function () {
  let $compile;
  let scope;

  beforeEach(angular.mock.module(directive));

  beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {
    'use strict';
    $compile = _$compile_;
    scope = _$rootScope_.$new();
  }));

  afterEach(function(){
    'use strict';
    scope = undefined;
    $compile = undefined;
  });

  it('should render attributes passed in', function(){
    'use strict';

    let element = $compile('<skills title="Title of Skills" class-names="some class name"></skills>')(scope);
    scope.$digest();
    expect(element.find('ul').hasClass('some class name')).toEqual(true);
    expect(element.find('ul').attr('aria-label')).toEqual('Skills used to make Title of Skills');
    expect(element.isolateScope().skills.title).toEqual('Title of Skills');
    expect(element.isolateScope().skills.classNames).toEqual('some class name');
  });

  it('should render list of skills', function(){
    'use strict';

    scope.items = ['disc', 'jockying'];
    let element = $compile('<skills items="items" bullet-class-names="hello world"></skills>')(scope);
    scope.$digest();
    expect(element.find('li').length).toEqual(2);
    expect(angular.element(element.find('li')[0]).text().trim()).toEqual('disc');
    expect(angular.element(element.find('li')[1]).text().trim()).toEqual('jockying');
    expect(angular.element(element.find('li')[0]).find('span').hasClass('bullet hello world')).toBe(true);
    expect(angular.element(element.find('li')[1]).find('span').hasClass('bullet hello world')).toBe(true);
  });
});