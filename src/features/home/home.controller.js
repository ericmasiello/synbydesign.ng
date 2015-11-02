export default class HomeController {
  constructor(randomNames, aboutContent, $sce) {
    this.random = randomNames;
    this.name = 'World';
    this.model = {
      about: $sce.trustAsHtml(aboutContent.content)
    }
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
  }
}

HomeController.$inject = ['randomNames', 'aboutContent', '$sce'];
