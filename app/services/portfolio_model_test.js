// testing controller
describe('Portfolio Model', function() {
  var $httpBackend, authRequestHandler, portfolioModel;

  // Set up the module
  beforeEach(module('myApp.services'));

  beforeEach(inject(function($injector) {

    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    // backend definition common for all tests
    authRequestHandler = $httpBackend.when('GET', 'http://localhost/synbydesign/wp/wp-json/posts/?filter[category_name]=web,other,logos,illustration,flyers,business-cards')
      .respond({userId: 'userX'}, {'A-Token': 'xxx'});

    beforeEach(inject(function(PortfolioModel) {
      portfolioModel = PortfolioModel;
    }));

  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    portfolioModel = null;
  });


  it('should have defined properties', function() {

    expect(portfolioModel.webItems.length).toBe(0);
    expect(portfolioModel.designItems.length).toBe(0);
    expect(portfolioModel.otherItems.length).toBe(0);
  });
});