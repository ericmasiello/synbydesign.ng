import aboutServices from './about.service'

describe('Services: About Model', function () {
  let service;
  let httpBackend;

  beforeEach(angular.mock.module(aboutServices));

  beforeEach(inject(function (_AboutModel_, $httpBackend) {
    service = _AboutModel_;
    httpBackend = $httpBackend;
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
