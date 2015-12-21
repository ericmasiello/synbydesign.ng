import directive from './loading.directive';

describe('Directive: loading', function () {
  let $compile;
  let scope;
  let $rootScope;

  beforeEach(angular.mock.module(directive));

  beforeEach(angular.mock.inject(function (_$compile_, _$rootScope_) {
    'use strict';
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = _$rootScope_.$new();
  }));

  afterEach(function(){
    'use strict';
    scope = undefined;
    $compile = undefined;
    $rootScope = undefined;
  });

  it('should hide the loader by default', function(){
    'use strict';

    let element = $compile('<loading></loading>')(scope);
    scope.$digest();

    expect(element.find('div').length).toEqual(0);
  });

  it('should be toggle when "app-is-loading" and "app-done-loading" messages are broadcast', function(){
    'use strict';

    let element = $compile('<loading></loading>')(scope);
    scope.$digest();

    $rootScope.$emit('app-is-loading');
    scope.$digest();

    expect(element.find('div').length).toEqual(1);

    $rootScope.$emit('app-done-loading');
    scope.$digest();

    expect(element.find('div').length).toEqual(0);
  });
});