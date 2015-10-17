'use strict';

describe('myApp.portfolio.service module', function() {
  beforeEach(module('myApp.portfolio.service'));

  var portfolio;
  var $httpBackend;
  var authRequestHandler;

  beforeEach(inject(function(_portfolio_, $injector){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    portfolio = _portfolio_;

    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');

    // backend definition common for all tests
    authRequestHandler = $httpBackend.when('GET', '/test.py')
      .respond([{userId: 'userX'}]);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('myApp.portfolio service', function() {

    it('should load data', function() {
      $httpBackend.expectGET('/test.py');
      portfolio.load().then(function(resp){

        expect(resp[0].userId).toBe('userX');
      });
      $httpBackend.flush();
    });

  });
});