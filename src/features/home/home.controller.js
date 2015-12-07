export default class HomeController {
  constructor(aboutContent, portfolioContent) {
    this.model = {
      about: aboutContent.content,
      webPortfolio: portfolioContent.web,
      otherPortfolio: portfolioContent.other,
      designPortfolio: portfolioContent.design
    };
  }
};

HomeController.$inject = ['aboutContent', 'portfolioContent'];
