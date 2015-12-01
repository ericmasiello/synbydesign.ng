export default class HomeController {
  constructor(randomNames, aboutContent, portfolioContent) {
    this.random = randomNames;
    this.name = 'World';
    this.model = {
      about: aboutContent.content
    };
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
  }
}

HomeController.$inject = ['randomNames', 'aboutContent', 'portfolioContent'];
