import directive from './about.directive';

describe('Directive: about', function () {
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

  it('should take source content and display it', function(){
    'use strict';

    let srcHtml = '<h1>Title Message</h1><p>Hello world. <strong>What</strong> <em>is</em> up?</p>';

    let element = $compile('<about src-content="' + srcHtml + '"></about>')(scope);
    scope.$digest();

    expect(element.find('div').html()).toEqual(srcHtml);
  });

});