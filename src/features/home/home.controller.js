export default class HomeController {
  constructor(randomNames, aboutContent, portfolioContent) {
    this.random = randomNames;
    this.name = 'World';
    this.model = {
      about: aboutContent.content,
      webPortfolio: portfolioContent.web,
      otherPortfolio: portfolioContent.other,
      designPortfolio: portfolioContent.design
    };
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
  }
}

HomeController.$inject = ['randomNames', 'aboutContent', 'portfolioContent'];
