import appConsts from '../../consts/appConsts.js';

export default class HomeController {
  constructor(aboutContent, portfolioContent) {
    this.model = {
      mastheadId: appConsts.UIID.masthead,
      logoId: appConsts.UIID.logo,
      about: aboutContent.content,
      webPortfolio: portfolioContent.web,
      otherPortfolio: portfolioContent.other,
      designPortfolio: portfolioContent.design
    };
  }
};

HomeController.$inject = ['aboutContent', 'portfolioContent'];
