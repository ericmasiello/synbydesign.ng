import home from './index';

describe('Controller: Home', function () {
  let ctrl;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function (_$controller_) {
    'use strict';
    ctrl = _$controller_('HomeController', {
      'aboutContent': {
        content: 'Lorem ipsum'
      },
      'portfolioContent': {
        web: ['web item'],
        other: ['other item'],
        design: ['design item']
      }
    });
  }));

  afterEach(function(){
    'use strict';
    ctrl = undefined;
  });

  it('model is initialized with values', function () {

    expect(ctrl.model).toBeDefined();
    expect(ctrl.model.mastheadId).toEqual('masthead');
    expect(ctrl.model.logoId).toEqual('logo');
    expect(ctrl.model.about).toEqual('Lorem ipsum');
    expect(ctrl.model.webPortfolio).toEqual(['web item']);
    expect(ctrl.model.otherPortfolio).toEqual(['other item']);
    expect(ctrl.model.designPortfolio).toEqual(['design item']);
  });
});
