import directive from './portfolioItem.directive';

describe('Directive: portfolio item', function () {
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

  it('should select the regular portfolio item template', function(){
    'use strict';

    let element = $compile('<portfolio-item></portfolio-item>')(scope);
    scope.$digest();

    expect(element.find('div').hasClass('portfolio__item--full')).toBe(false);
  });

  it('should select the detail portfolio item template when detail-view attribute is passed', function(){
    'use strict';

    let element = $compile('<portfolio-item detail-view="true"></portfolio-item>')(scope);
    scope.$digest();

    expect(element.find('div').hasClass('portfolio__item--full')).toBe(true);
  });

  it('should set the class names passed in to the div.portfolio__item', function() {
    'use strict';

    let element = $compile('<portfolio-item class-names="things and stuff"></portfolio-item>')(scope);
    scope.$digest();

    expect(element.find('div').hasClass('portfolio__item things and stuff')).toBe(true);

    element = $compile('<portfolio-item class-names="things and stuff" detail-view="true"></portfolio-item>')(scope);
    scope.$digest();

    expect(element.find('div').hasClass('portfolio__item--full things and stuff')).toBe(true);
  });

  it('should set the appropriate attributes based on the detail object', function() {
    'use strict';

    scope.item = {
      title: 'This is the title',
      featured_image: '/path/to/image.jpg'
    };

    scope.detailItem = {
      title: 'This is the detail title',
      full_size_image: '/path/to/detail/image.jpg'
    };

    let element = $compile('<portfolio-item detail="item"></portfolio-item>')(scope);
    scope.$digest();

    let img = angular.element(element[0].getElementsByClassName("portfolio__img"));
    let title = angular.element(element[0].getElementsByClassName("portfolio__title"));

    expect(title.text().trim()).toEqual('This is the title');
    expect(img.attr('src').trim()).toEqual('/path/to/image.jpg');
    expect(img.attr('alt').trim()).toEqual('Preview image of This is the title');


    element = $compile('<portfolio-item detail="detailItem" detail-view="true"></portfolio-item>')(scope);
    scope.$digest();

    img = angular.element(element[0].getElementsByClassName("portfolio__img"));
    expect(img.attr('src').trim()).toEqual('/path/to/detail/image.jpg');
    expect(img.attr('alt').trim()).toEqual('This is the detail title');
    expect(img.attr('aria-label').trim()).toEqual('This is the detail title detailed view');
  });

  it('should set class values on the image tag', function() {
    'use strict';

    let element = $compile('<portfolio-item img-class-names="class for image"></portfolio-item>')(scope);
    scope.$digest();

    let img = angular.element(element[0].getElementsByClassName("portfolio__img"));
    expect(img.hasClass('portfolio__img class for image')).toBe(true);
  });

  it('should set appropriate values on Skills directive whether its a detail or non-detail view', function() {
    'use strict';

    scope.item = {
      title: 'The title',
      post_tag: ['A', 'B', 'C']
    };

    let element = $compile('<portfolio-item detail="item"></portfolio-item>')(scope);
    scope.$digest();

    let skills = element.find('skills');

    expect(skills.find('ul').hasClass('skills small')).toBe(true);
    expect(angular.element(skills.find('li')[0]).find('span').attr('class').trim()).toEqual('bullet');

    element = $compile('<portfolio-item detail-view="true" detail="item"></portfolio-item>')(scope);
    scope.$digest();

    skills = element.find('skills');

    expect(skills.find('ul').hasClass('h4  list-unstyled  text-center')).toBe(true);
    expect(angular.element(skills.find('li')[0]).find('span').attr('class').trim()).toEqual('bullet hide');

  });
});