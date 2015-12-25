import directive from './logo.directive';

describe('Directive: logo', function () {
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

  it('should set the id of the logo', function(){
    'use strict';

    let element = $compile('<logo logo-id="the-id"></logo>')(scope);
    scope.$digest();

    expect(element.find('h1').find('a').attr('id')).toEqual('the-id');
  });
});