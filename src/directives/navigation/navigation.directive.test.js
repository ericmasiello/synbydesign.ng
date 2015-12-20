import directive from './navigation.directive';

describe('Directive: navigation', function () {
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

  it('should display all navigation items by default', function(){
    'use strict';

    let element = $compile('<navigation></navigation>')(scope);
    scope.$digest();

    expect(element.find('li').length).toBe(5);
  });

  it('should only display the logo when passing in show-nav=false', function(){
    'use strict';

    scope.theValue = false;

    let element = $compile('<navigation show-nav="theValue"></navigation>')(scope);
    scope.$digest();

    expect(element.find('li').length).toBe(1);
  });

  it('should set the logo id', function(){
    'use strict';

    let element = $compile('<navigation logo-id="the-logo-id"></navigation>')(scope);
    scope.$digest();

    let logoAnchor = angular.element(element[0].getElementsByClassName('masthead__logo__title')).find('a');

    expect(logoAnchor.attr('id')).toEqual('the-logo-id');
  });
});