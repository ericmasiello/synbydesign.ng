import directive from './portfolioList.directive';

describe('Directive: portfolio list', function () {
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

  it('should not render the list if no items are passed in', function(){
    'use strict';

    let element = $compile('<portfolio-list></portfolio-list>')(scope);
    scope.$digest();
    expect(element.find('ul').length).toEqual(0);
    expect(element.find('h1').length).toEqual(0);
  });

  it('should render the list when items are passed in', function(){
    'use strict';

    scope.portfolioItems = [{
      detail: {
        title: 'Hello world',
        ID: 1,
        featured_image: '/path/to/image/1.jpg'
      }
    },{
      detail: {
        title: 'Whats up',
        ID: 2,
        featured_image: '/path/to/image/2.jpg'
      }
    }];
    let element = $compile('<portfolio-list portfolio-items="portfolioItems"></portfolio-list>')(scope);
    scope.$digest();
    expect(element.find('li').length).toEqual(2);
    expect(element.isolateScope().portfolioList.portfolioItems.length).toEqual(2);
  });

  it('should render a title', function() {
    'use strict';

    scope.portfolioItems = [{
      detail: {
        title: 'Hello world',
        ID: 1,
        featured_image: '/path/to/image/1.jpg'
      }
    }];

    let element = $compile('<portfolio-list title="The title" portfolio-items="portfolioItems"></portfolio-list>')(scope);
    scope.$digest();
    expect(element.find('h1').text().trim()).toEqual('The title');
  });
});