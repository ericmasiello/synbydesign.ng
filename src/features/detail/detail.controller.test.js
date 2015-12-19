import home from './index';

describe('Controller: Detail', function () {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function (_$controller_) {
    'use strict';
    $controller = _$controller_;
  }));

  afterEach(function(){
    'use strict';
    $controller = undefined;
  });

  it('model is not initialized when no portfolio details are passed', function () {

    let ctrl = $controller('DetailController', {
      'portfolioDetail': []
    });

    expect(ctrl.model).toBeUndefined();
  });

  it('model is initialized when portfolio details are passed', function () {

    let ctrl = $controller('DetailController', {
      'portfolioDetail': ['first portfolio item']
    });

    expect(ctrl.model).toBeDefined();
    expect(ctrl.model.showNav).toEqual(false);
    expect(ctrl.model.mastheadId).toEqual('masthead');
    expect(ctrl.model.logoId).toEqual('logo');
    expect(ctrl.model.detail).toEqual('first portfolio item');
  });
});
