import aboutServices from './about.service.js';
import appConsts from '../consts/appConsts';

describe('Services: About Model', function () {
  let service;
  let $httpBackend;
  let authRequestHandler;
  let api = `${appConsts.SERVER}/pages/about`;

  beforeEach(angular.mock.module(aboutServices));

  beforeEach(inject(function (_AboutModel_, _$httpBackend_) {
    service = _AboutModel_;
    $httpBackend = _$httpBackend_;
    console.log('RESOLVE', api);
    authRequestHandler = $httpBackend.when('GET', api)
      .respond(
        {
          content: 'Hello world'
        }
      );
  }));

  afterEach(()=>{
    'use strict';
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    service = undefined;
    $httpBackend = undefined;
  });

  it('should set properties', function () {

    expect(service.model).toBeDefined();
    expect(service.$http).toBeDefined();
    expect(service.$q).toBeDefined();
  });

  it('should load about content', function(){
    "use strict";

    $httpBackend.expectGET(api);
    service.load();
    $httpBackend.flush();
    expect(service.model.content).toBe('Hello world');
  });
});
