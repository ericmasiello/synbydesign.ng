import aboutServices from './about.service.js'

describe('Services: About Model', function () {
  let service;
  let httpBackend;
  let authRequestHandler;

  beforeEach(angular.mock.module(aboutServices));

  beforeEach(function() {

    //module()

    module(function($provide) {
      $provide.constant('routesPaths', {
      });
    });

  });

  beforeEach(inject(function (_AboutModel_, $httpBackend) {
    service = _AboutModel_;
    httpBackend = $httpBackend;

    authRequestHandler = $httpBackend.when('GET', '/auth.py')
      .respond({userId: 'userX'}, {'A-Token': 'xxx'});

  }));

  afterEach(()=>{
    "use strict";
    service = undefined;
    httpBackend = undefined;
  });

  it('should set properties', function () {

    expect(service.model).toBeDefined();
    expect(service.$http).toBeDefined();
    expect(service.$q).toBeDefined();
    expect(service.routePaths).toBeDefined();
  });
});
