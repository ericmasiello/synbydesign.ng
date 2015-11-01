export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
  }
}

HomeController.$inject = ['randomNames'];
