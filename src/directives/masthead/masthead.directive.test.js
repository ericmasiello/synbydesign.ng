import directive from './masthead.directive';

describe('Directive: masthead', function () {
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

  it('should set the id of the masthead', function(){
    'use strict';

    scope.theNavValue = true;
    let element = $compile('<masthead masthead-id="the-id" show-nav="theNavValue"></masthead>')(scope);
    scope.$digest();

    expect(element.find('header').attr('id')).toEqual('the-id');
  });

  it('should set showNav to true by default', function(){
    'use strict';

    scope.theNavValue = true;
    let element = $compile('<masthead show-nav="theNavValue"></masthead>')(scope);
    scope.$digest();

    expect(element.isolateScope().masthead.showNav).toEqual(true);
  });

  it('should set props on scope when passed in', function(){
    'use strict';

    scope.theNavValue = false;

    let element = $compile('<masthead logo-id="the-logo-id" show-nav="theNavValue"></masthead>')(scope);
    scope.$digest();

    expect(element.isolateScope().masthead.showNav).toEqual(false);
    expect(element.isolateScope().masthead.logoId).toEqual('the-logo-id');
  });
});